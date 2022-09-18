<script>
  import { onMount } from "svelte";
  import {
    Chessboard,
    COLOR,
  } from "cm-chessboard/src/cm-chessboard/Chessboard";
  import Sprites from "cm-chessboard/assets/images/chessboard-sprite-staunty.svg";
  import "cm-chessboard/assets/styles/cm-chessboard.css";

  import Move from "./Move.svelte";

  import chevronRight from "../assets/chevron_right.svg";
  import chevronLeft from "../assets/chevron_left.svg";
  import firstPage from "../assets/first_page.svg";
  import lastPage from "../assets/last_page.svg";

  export let puzzle;
  export let game;

  let board;
  onMount(() => {
    board = new Chessboard(document.getElementById("chessboard"), {
      position: puzzle.fen,
      orientation: puzzle.fen.split(" ")[1] === "b" ? COLOR.white : COLOR.black,
      sprite: {
        url: Sprites,
      },
      style: {
        cssClass: "black-and-white",
      },
    });
  });

  let fenIndex = 0;
  $: board && board.setPosition(puzzle.fens[fenIndex], true);
</script>

<div id="answer">
  <div id="board">
    <div class="container">
      <div id="chessboard" />
    </div>
    <div id="controls">
      <button
        on:click={() => {
          fenIndex = 0;
        }}><img src={firstPage} alt="first" /></button
      >
      <button
        on:click={() => {
          if (fenIndex) {
            fenIndex--;
          }
        }}><img src={chevronLeft} alt="prev" /></button
      >
      <button
        on:click={() => {
          if (fenIndex < puzzle.san_moves.length) {
            fenIndex++;
          }
        }}><img src={chevronRight} alt="next" /></button
      >
      <button
        on:click={() => {
          fenIndex = puzzle.san_moves.length;
        }}><img src={lastPage} alt="last" /></button
      >
    </div>
  </div>
  <div id="line">
    <div class="container">
      {#each puzzle.san_moves as _, i}
        <Move
          {puzzle}
          moveIndex={i}
          bind:activeFenIndex={fenIndex}
          failed={i === game.failedMoveIndex}
        />
      {/each}
    </div>
  </div>
</div>

<style>
  #answer {
    display: flex;
  }

  
  #board {
    min-width: 30rem;
    width: 66vh;
    max-width: 65vw;
    margin: 0 auto;
  }
  
  #controls {
    display: flex;
    justify-content: center;
  }
  
  img {
    width: 2rem;
    filter: invert(100%) sepia(0%) saturate(7494%) hue-rotate(346deg)
    brightness(100%) contrast(104%);
    vertical-align: middle;
  }
  
  #line > div {
    max-height: 100%;
    overflow-y: auto;
  }

  @media only screen and (max-width: 800px) {
    #answer {
      flex-direction: column;
    }
    #line > div.container {
     display: flex;
     flex-wrap: wrap;
     justify-content: center;
    }
  }
</style>
