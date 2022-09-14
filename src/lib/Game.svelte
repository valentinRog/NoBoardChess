<script>
  import Infos from "./Infos.svelte";
  import Pieces from "./Pieces.svelte";
  import Inputs from "./Inputs.svelte";
  import Board from "./Board.svelte";

  export let puzzle;
  let guessing = true;
</script>

<div id="game">
  {#if guessing}
    <Infos {puzzle} />
    <Pieces pieces={puzzle.pieces} />
    <Inputs {puzzle} bind:guessing />
  {:else}
    <Board {puzzle} />
  {/if}
</div>
