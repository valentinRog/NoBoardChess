<script>
  import Pieces from "./Pieces.svelte";
  import Inputs from "./Inputs.svelte";
  import Board from "./Board.svelte";
  import Infos from "./Infos.svelte";

  const get_puzzle = async () => {
    const res = await fetch("https://valenbel123.pythonanywhere.com/");
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
    level: 1,
    lives: 3,
  };
</script>

<div id="game">
  {#await promise then puzzle}
    <Infos {puzzle} {game}/>
    {#if game.guessing}
      <Pieces pieces={puzzle.pieces} />
      <Inputs {puzzle} bind:game />
    {:else}
      <Board {puzzle} {game} />
    {/if}
  {/await}
</div>
