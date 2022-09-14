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

<div id="chessboard" />
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
<div id="line">
  {#each puzzle.san_moves as _, i}
      <Move {puzzle} moveIndex={i} bind:activeFenIndex={fenIndex}/>
  {/each}
</div>

<style>

  #line {
    display: flex;
    justify-content: center;
  }

</style>
