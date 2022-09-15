<script>
  import { onMount } from "svelte";
  import { Chessboard } from "cm-chessboard/src/cm-chessboard/Chessboard";
  import Sprites from "cm-chessboard/assets/images/chessboard-sprite-staunty.svg";
  import "cm-chessboard/assets/styles/cm-chessboard.css";

  import Move from "./Move.svelte";

  export let puzzle;

  let board;

  onMount(() => {
    board = new Chessboard(document.getElementById("chessboard"), {
      position: puzzle.fen,
      sprite: {
        url: Sprites,
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
          }}>{"<<"}</button
        >
        <button
          on:click={() => {
            if (fenIndex) {
              fenIndex--;
            }
          }}>{"<"}</button
        >
        <button
          on:click={() => {
            if (fenIndex < puzzle.san_moves.length) {
              fenIndex++;
            }
          }}>{">"}</button
        >
        <button
          on:click={() => {
            fenIndex = puzzle.san_moves.length;
          }}>{">>"}</button
        >
    </div>
  </div>
  <div id="line">
    <div class="container">
      {#each puzzle.san_moves as _, i}
        <Move {puzzle} moveIndex={i} bind:activeFenIndex={fenIndex} />
      {/each}
    </div>
  </div>
</div>

<style>
  #answer {
    display: flex;
  }

  #board {
    min-width: 400px;
    max-width: 700px;
    width: 50vw;
  }

  #controls {
    display: flex;
    justify-content: center;
  }
</style>
