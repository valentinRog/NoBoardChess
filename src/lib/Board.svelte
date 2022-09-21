<script>
  import { onMount } from "svelte";
  import chevronRight from "../assets/chevron_right.svg";
  import chevronLeft from "../assets/chevron_left.svg";
  import firstPage from "../assets/first_page.svg";
  import lastPage from "../assets/last_page.svg";

  import {
    Chessboard,
    COLOR,
  } from "cm-chessboard/src/cm-chessboard/Chessboard";
  import Sprites from "cm-chessboard/assets/images/chessboard-sprite-staunty.svg";
  import "cm-chessboard/assets/styles/cm-chessboard.css";

  let board;
  export let game;
  export let puzzle;

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
  export let activeFenIndex = 0;
  $: board && board.setPosition(puzzle.fens[activeFenIndex], true);

  const first = () => {
    activeFenIndex = 0;
  };
  const prev = () => {
    if (activeFenIndex) {
      activeFenIndex--;
    }
  };
  const next = () => {
    if (activeFenIndex < puzzle.san_moves.length) {
      activeFenIndex++;
    }
  };
  const last = () => {
    activeFenIndex = puzzle.san_moves.length;
  };
</script>

<div id="board">
  <div id="container">
    <div id="chessboard" />
  </div>
  <div id="controls">
    <button on:click={first}><img src={firstPage} alt="first" /></button>
    <button on:click={prev}><img src={chevronLeft} alt="prev" /></button>
    <button on:click={next}><img src={chevronRight} alt="next" /></button>
    <button on:click={last}><img src={lastPage} alt="last" /></button>
  </div>
</div>

<style lang="scss">
  @import "../style/vars";
  @import "../style/mix";

  #board {
    margin: 0 auto;
    #container {
      width: $board-size;
      @include container;
    }
    #controls {
      display: flex;
      justify-content: center;
      img {
        @include to-white;
        width: 2rem;
        vertical-align: middle;
      }
    }
  }
</style>
