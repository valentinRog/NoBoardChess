<script>
  import Scrollbar from "smooth-scrollbar";
  import { onMount } from "svelte";

  import Move from "./Move.svelte";

  export let game;
  export let puzzle;
  export let activeFenIndex = null;
  export let lastMoveIndex = puzzle.san_moves.length;
  export let direction = "column";

  onMount(() => {
    if (document.querySelector(".scrollbar")) {
      Scrollbar.init(document.querySelector(".scrollbar"), {});
    }
  });
</script>

<div id="line" class:scrollbar={direction === "column"} class={direction}>
  {#each puzzle.san_moves.slice(0, lastMoveIndex + 1) as _, i}
    <div>
      <Move
        {puzzle}
        moveIndex={i}
        failed={i === game.failedMoveIndex}
        bind:activeFenIndex
      />
    </div>
  {/each}
</div>

<style lang="scss">
  @import "../style/vars";
  @import "../style/mix";

  #line {
    @include container;
    &.column {
      max-height: $board-size;
      @include line(column);
    }
    &.row {
      @include line(row);
    }
  }
</style>
