<script>
  import Pieces from "./lib/Pieces.svelte";
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
    <Pieces pieces={puzzle.pieces} />
    <Board puzzle={puzzle} />
  </div>
{/await}
