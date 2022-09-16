<script>
  export let puzzle;
  export let level;
  export let lives;

  import heart from "../assets/heart.svg";
</script>

<div class="container">
  <ul>
    <li>Level: {level}</li>
    <li>Rating: {puzzle.elo}</li>
    <li>Number of pieces: {puzzle.n_pieces}</li>
  </ul>
  <div id="lives">
    {#each Array(lives) as _}
      <img src={heart} alt="yo" />
    {/each}
  </div>
</div>

<style>
  img {
    width: 50px;
  }
</style>
