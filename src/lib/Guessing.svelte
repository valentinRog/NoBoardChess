<script>
  import Pieces from "./Pieces.svelte";
  import Inputs from "./Inputs.svelte";
  import Line from "./Line.svelte";

  export let puzzle;
  export let game;

  game.currentMoveIndex = 1;
</script>

<Pieces pieces={puzzle.pieces} />
<Line
  {game}
  {puzzle}
  lastMoveIndex={game.currentMoveIndex - 1}
  direction="row"
/>
<Inputs {puzzle} bind:game />
