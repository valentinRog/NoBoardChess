<script>
  import Answer from "./Answer.svelte";
  import Infos from "./Infos.svelte";
  import Guessing from "./Guessing.svelte";

  import Game from "../Game";
  let game = new Game();

  let promise;
  let level;
  $: if (level != game.level) {
    level = game.level;
    promise = game.getPuzzle();
  }
</script>

<div id="game">
  {#await promise then puzzle}
    <Infos {puzzle} bind:game />
    {#if game.guessing}
      <Guessing {puzzle} bind:game />
    {:else}
      <Answer {puzzle} bind:game />
    {/if}
  {/await}
</div>
