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

  let index = 0;
  $: board && board.setPosition(puzzle.fens[index], true);
</script>

<div id="chessboard" />
<div id="controls">
  <button
    on:click={() => {
      index = 0;
    }}>{"<<"}</button
  >
  <button
    on:click={() => {
      if (index) {
        index--;
      }
    }}>{"<"}</button
  >
  <button
    on:click={() => {
      if (index < puzzle.san_moves.length) {
        index++;
      }
    }}>{">"}</button
  >
  <button
    on:click={() => {
      index = puzzle.san_moves.length;
    }}>{">>"}</button
  >
</div>
<div id="line">
  {#each puzzle.san_moves as _, i}
    <div
      class:active={index === i + 1}
      on:click={() => {
        index = i + 1;
      }}
    >
      <Move {puzzle} index={i} />
    </div>
  {/each}
</div>

<style>
  .active {
    border: 1px solid white;
  }
</style>
