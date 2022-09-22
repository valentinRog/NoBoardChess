<script>
  import Answer from "./Answer.svelte";
  import Infos from "./Infos.svelte";
  import Guessing from "./Guessing.svelte";

  let level = 1;

  const get_puzzle = async () => {
    const res = await fetch(
      `https://valenbel123.pythonanywhere.com/level/${level}`
    );
    const puzzle = await res.json();
    if (res.ok) {
      console.log(puzzle);
      return puzzle;
    } else {
      throw new Error(puzzle);
    }
  };
  let promise = get_puzzle();

  import Game from "../Game";
  let game = new Game();

  $: if (level != game.level) {
    level = game.level;
    promise = get_puzzle();
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
