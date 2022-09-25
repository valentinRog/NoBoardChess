<script>
  import Answer from "./Answer.svelte";
  import Infos from "./Infos.svelte";
  import Guessing from "./Guessing.svelte";

  import { puzzle, level } from "../stores.js";
  import { getPuzzle } from "../puzzle.js"

  let promise = getPuzzle($level);
  promise.then((data) => {
    $puzzle = data;
  });
  $: if ($level) {
    promise = getPuzzle($level);
    promise.then((data) => {
      $puzzle = data;
    });
  }

  let guessing = true;
</script>

<div id="game">
  {#await promise then}
    <Infos bind:guessing/>
    {#if guessing}
      <Guessing bind:guessing/>
    {:else}
      <Answer />
    {/if}
  {/await}
</div>
