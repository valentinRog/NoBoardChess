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

  let failedMove;
  let guessing = true;

  let level = 1;
  let lives = 3;
</script>

<div id="game">
  {#await promise then puzzle}
    <Infos {puzzle} {level} {lives}/>
    {#if guessing}
      <Pieces pieces={puzzle.pieces} />
      <Inputs {puzzle} bind:guessing bind:failedMove />
    {:else}
      <Board {puzzle} {failedMove} />
    {/if}
  {/await}
</div>
