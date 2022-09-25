<script>
  import "cm-chessboard/assets/styles/cm-chessboard.css";

  import Line from "./Line.svelte";
  import Board from "./Board.svelte";

  let activeFenIndex = 0;
  let innerWidth;

  const maxWidth = 800;
</script>

<svelte:window bind:innerWidth />

<div
  id="answer"
  style:flex-direction={innerWidth < maxWidth ? "column" : "row"}
>
  <Board bind:activeFenIndex />
  <div>
    {#if innerWidth < maxWidth}
      <Line bind:activeFenIndex direction="row" />
    {:else}
      <Line bind:activeFenIndex direction="column" />
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
