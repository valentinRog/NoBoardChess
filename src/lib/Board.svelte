<script>
  import { onMount } from "svelte";
  import { Chessboard } from "cm-chessboard/src/cm-chessboard/Chessboard";
  import Sprites from "cm-chessboard/assets/images/chessboard-sprite-staunty.svg";
  import "cm-chessboard/assets/styles/cm-chessboard.css";

  import Line from "./Line.svelte";

  export let puzzle;

  let board;

  onMount(() => {
    board = new Chessboard(document.getElementById("containerId"), {
      position: puzzle.fen,
      sprite: {
        url: Sprites,
      },
    });
  });

  let i = 0;
  $: board && board.setPosition(puzzle.fens[i], true);
</script>

<Line {puzzle} moves={puzzle.san_moves} bind:index={i} />
<div id="containerId" />
<button
  on:click={() => {
    i = 0;
  }}>{"<<"}</button
>
<button
  on:click={() => {
    if (i) {
      i--;
    }
  }}>{"<"}</button
>
<button
  on:click={() => {
    if (i < puzzle.san_moves.length) {
      i++;
    }
  }}>{">"}</button
>
<button
  on:click={() => {
    i = puzzle.san_moves.length;
  }}>{">>"}</button
>
