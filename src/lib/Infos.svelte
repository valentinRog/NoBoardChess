<script>
  export let puzzle;
  export let game;

  import heart from "../assets/heart.svg";
  import brokenHeart from "../assets/broken_heart.svg";
</script>

<div id="infos">
  <div id="level">
    #{game.level}
  </div>
  <div id="lives">
    {#each Array(game.lives - game.fails) as _}
      <img src={heart} alt="heart" class="heart" />
    {/each}
    {#each Array(game.fails) as _}
      <img src={brokenHeart} alt="broken heart" class="broken-heart" />
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

<style lang="scss">
  @import "../style/vars";
  @import "../style/mix";

  #infos {
    @include container;
    display: flex;
    justify-content: center;
    align-items: center;

    & > div {
      margin: 0 2rem;

      &#level {
        font-size: 2.5rem;
        font-weight: bold;
      }

      &#lives {
        display: inline-flex;
        img {
          width: 3rem;
          &.heart {
            @include to-green;
          }
          &.broken-heart {
            @include to-red;
          }
        }
      }
      ul {
        list-style: none;
        text-align: left;
        padding: 0;
      }
    }
  }
</style>
