<script>
  import Infos from "./lib/Infos.svelte";
  import Pieces from "./lib/Pieces.svelte";
  import Inputs from "./lib/Inputs.svelte";
  import Board from "./lib/Board.svelte";

  const get_puzzle = async () => {
    const res = await fetch("http://127.0.0.1:5000/puzzle");
    const puzzle = await res.json();

    if (res.ok) {
      console.log(puzzle);
      return puzzle;
    } else {
      throw new Error(puzzle);
    }
  };

  let promise = get_puzzle();

</script>

{#await promise}
  ...
{:then puzzle}
  <div>
    <Infos {puzzle} />
    <Pieces pieces={puzzle.pieces} />
    <Inputs {puzzle} />
    <Board {puzzle} />
  </div>
{/await}
