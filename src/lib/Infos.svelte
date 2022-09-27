<script>
  import { puzzle, lives, fails, level, failedMoveIndex, next } from "../stores";

  import heart from "../assets/heart.svg";
  import brokenHeart from "../assets/broken_heart.svg";

  export let guessing;
</script>

<div id="infos">
  <div id="level">
    #{$level}
  </div>
  <div id="lives">
    {#each Array($lives - $fails) as _}
      <img src={heart} alt="heart" class="heart" />
    {/each}
    {#each Array($fails) as _}
      <img src={brokenHeart} alt="broken heart" class="broken-heart" />
    {/each}
  </div>
  {#if !guessing}
    <button on:click={()=>{
      guessing = true;
      $next();
    }}>
      {$fails < $lives ? "next" : "restart"}
    </button>
  {/if}
  <div>
    <ul>
      <li>Rating: {$puzzle.elo}</li>
      <li>Number of pieces: {$puzzle.n_pieces}</li>
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
