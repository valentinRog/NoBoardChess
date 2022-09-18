<script>
  import Pieces from "./Pieces.svelte";
  import Inputs from "./Inputs.svelte";
  import Board from "./Board.svelte";
  import Infos from "./Infos.svelte";

  let level = 100;

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

  let game = {
    failedMove: undefined,
    guessing: true,
    level: level,
    lives: 3,
    fails: 0,
  };

  $: if (level < game.level) {
    level = game.level;
    promise = get_puzzle();
  }
</script>

<div id="game">
  {#await promise then puzzle}
    <Infos {puzzle} bind:game />
    {#if game.guessing}
      <Pieces pieces={puzzle.pieces} />
      <Inputs {puzzle} bind:game />
    {:else}
      <Board {puzzle} bind:game />
    {/if}
  {/await}
</div>
