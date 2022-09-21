<script>
  import "cm-chessboard/assets/styles/cm-chessboard.css";

  import Line from "./Line.svelte";
  import Board from "./Board.svelte";

  export let puzzle;
  export let game;
  let activeFenIndex = 0;
  let innerWidth;

  const maxWidth = 800;
</script>

<svelte:window bind:innerWidth />

<div id="answer" style:flex-direction={innerWidth < maxWidth ? "column" : "row"}>
  <Board bind:game bind:activeFenIndex {puzzle} />
  <div>
    {#if innerWidth < maxWidth}
      <Line {game} {puzzle} bind:activeFenIndex direction="row" />
    {:else}
      <Line {game} {puzzle} bind:activeFenIndex direction="column" />
    {/if}
  </div>
</div>

<style lang="scss">
  @import "../style/vars";
  @import "../style/mix";

  #answer {
    display: flex;
  }
</style>
