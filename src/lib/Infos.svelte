<script>
  export let puzzle;
  export let game;

  import heart from "../assets/heart.svg";
</script>

<div class="container">
  <div id="level">
    #{game.level}
  </div>
  <div id="lives">
    {#each Array(game.lives) as _}
      <img src={heart} alt="yo" />
    {/each}
  </div>
  <div>
    <ul>
      <li>Rating: {puzzle.elo}</li>
      <li>Number of pieces: {puzzle.n_pieces}</li>
    </ul>
  </div>
</div>

<style>
  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  img {
    width: 40px;
  }

  ul {
    list-style: none;
    text-align: left;
    padding: 0;
  }

  #level {
    font-size: 30px;
    font-weight: bold;
  }
</style>
