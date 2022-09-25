<script>
  import Pieces from "./Pieces.svelte";
  import Inputs from "./Inputs.svelte";
  import Line from "./Line.svelte";

  export let guessing;

  let currentMoveIndex = 1;
</script>

<Pieces />
<Line  lastMoveIndex={currentMoveIndex - 1} direction="row" />
<Inputs bind:currentMoveIndex bind:guessing />
