<script>
  import { onMount } from "svelte";
  import {
    Chessboard,
    COLOR,
  } from "cm-chessboard/src/cm-chessboard/Chessboard";
  import Sprites from "cm-chessboard/assets/images/chessboard-sprite-staunty.svg";
  import "cm-chessboard/assets/styles/cm-chessboard.css";
  import Scrollbar from 'smooth-scrollbar';

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
    Scrollbar.init(document.querySelector('.my-scrollbar'), {});
  });

  let fenIndex = 0;
  $: board && board.setPosition(puzzle.fens[fenIndex], true);

  const first = () => {
    fenIndex = 0;
  };
  const prev = () => {
    if (fenIndex) {
      fenIndex--;
    }
  };
  const next = () => {
    if (fenIndex < puzzle.san_moves.length) {
      fenIndex++;
    }
  };
  const last = () => {
    fenIndex = puzzle.san_moves.length;
  };
</script>

<div id="answer">
  <div id="board">
    <div class="container">
      <div id="chessboard" />
    </div>
    <div id="controls">
      <button on:click={first}><img src={firstPage} alt="first" /></button>
      <button on:click={prev}><img src={chevronLeft} alt="prev" /></button>
      <button on:click={next}><img src={chevronRight} alt="next" /></button>
      <button on:click={last}><img src={lastPage} alt="last" /></button>
    </div>
  </div>
  <div>
  <div id="line" class="my-scrollbar">
    {#each puzzle.san_moves as _, i}
      <div>
        <Move {puzzle} moveIndex={i} failed={i === game.failedMoveIndex} bind:activeFenIndex={fenIndex}/>
      </div>
    {/each}
  </div>
</div>
</div>

<style lang="scss">
  @import "../style/vars";
  @import "../style/mix";

  #answer {
    display: flex;
  }

  .container {
    @include container;
  }

  #board {
    width: $board-size;
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

  #line {
    @include container;
    @include line(column);
  }

  @media only screen and (max-width: 800px) {
    #answer {
      flex-direction: column;
    }
    #line {
      @include line(row);
    }
  }
</style>
