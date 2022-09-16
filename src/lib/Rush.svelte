<script>
  import Game from "./Game.svelte";
  import Infos from "./Infos.svelte";

	let level = 1;
  let lives = 3;

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
</script>

<div>
  {#await promise then puzzle}
    <Infos {puzzle} {level} {lives}/>
    <Game {puzzle} />
  {/await}
</div>

<style>
</style>
