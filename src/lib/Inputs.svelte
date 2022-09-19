<script>
  export let puzzle;
  export let game;

  import Move from "./Move.svelte";

  game.failedMoveIndex = null;
  let index = 1;
  $: move = puzzle.san_moves[index];
  $: moves = puzzle.san_moves.slice(0, index);
  let current = "";

  const getKeys = () => {
    let keys = [];
    if (index < puzzle.legal_san_moves.length && current !== move) {
      puzzle.legal_san_moves[index].forEach((move) => {
        if (move.startsWith(current) && !keys.includes(move[current.length])) {
          keys = [...keys, move[current.length]];
        }
      });
      keys = keys.sort();
    }
    return keys;
  };

  let buttons = getKeys();

  const handleClick = (letter) => {
    return () => {
      if (letter === move[current.length]) {
        current += letter;
        while (getKeys().length === 1) {
          current += getKeys()[0];
        }
        if (current === move) {
          index += 2;
          current = "";
          if (index > puzzle.san_moves.length - 1) {
            game.guessing = false;
          }
        }
        buttons = getKeys();
      } else {
        game.failedMoveIndex = index;
        game.fails++;
        game.guessing = false;
      }
    };
  };
</script>

<div>
  <div id="line">
    {#each moves as _, i}
      <div>
        <Move {puzzle} moveIndex={i} />
      </div>
    {/each}
  </div>
  <div>
    {current}
  </div>
  {#each buttons as button}
    <button on:click={handleClick(button)}>{button}</button>
  {/each}
</div>

<style lang="scss">
  @import "../style/vars";
  @import "../style/mix";

  #line {
    @include container;
    @include line(row);
  }
</style>
