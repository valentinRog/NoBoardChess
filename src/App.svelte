<script>
  import Game from "./lib/Game.svelte";

  const get_puzzle = async () => {
    const res = await fetch("http://127.0.0.1:5000/");
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
  <Game {puzzle}/>
{/await}
