<script>
  export let puzzle;
  export let game;

  import heart from "../assets/heart.svg";
  import brokenHeart from "../assets/broken_heart.svg";
</script>

<div class="container">
  <div id="level">
    #{game.level}
  </div>
  <div id="lives">
    {#each Array(game.lives - game.fails) as _}
      <img src={heart} alt="yo" class="heart" />
    {/each}
    {#each Array(game.fails) as _}
      <img src={brokenHeart} alt="yo" class="broken-heart" />
    {/each}
  </div>
  {#if !game.guessing}
    {#if game.fails < game.lives}
      <button
        on:click={() => {
          game.guessing = true;
          game.level++;
        }}>next</button
      >
    {:else}
      <button
        on:click={() => {
          game.guessing = true;
          game.level = 1;
          game.fails = 0;
        }}>restart</button
      >
    {/if}
  {/if}
  <div>
    <ul>
      <li>Rating: {puzzle.elo}</li>
      <li>Number of pieces: {puzzle.n_pieces}</li>
    </ul>
  </div>
</div>

<style>
  div.container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  div.container > div {
    margin: 0 20px;
  }

  div#lives {
    display: flex;
  }

  img {
    width: 40px;
  }

  img.heart {
    filter: invert(74%) sepia(92%) saturate(5896%) hue-rotate(96deg)
      brightness(130%) contrast(123%);
  }

  img.broken-heart {
    filter: invert(23%) sepia(75%) saturate(6495%) hue-rotate(355deg)
      brightness(113%) contrast(126%);
  }

  ul {
    list-style: none;
    text-align: left;
    padding: 0;
  }

  #level {
    font-size: 2.5rem;
    font-weight: bold;
  }
</style>
