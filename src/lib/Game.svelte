<script>
  import Pieces from "./Pieces.svelte";
  import Inputs from "./Inputs.svelte";
  import Board from "./Board.svelte";

  export let puzzle;
  let failedMove;

  let guessing = true;
</script>

<div id="game">
  {#if guessing}
    <Pieces pieces={puzzle.pieces} />
    <Inputs {puzzle} bind:guessing bind:failedMove/>
  {:else}
    <Board {puzzle} {failedMove}/>
  {/if}
</div>
