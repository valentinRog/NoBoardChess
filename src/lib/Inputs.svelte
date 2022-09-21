<script>
  export let puzzle;
  export let game;

  game.failedMoveIndex = null;
  $: move = puzzle.san_moves[game.currentMoveIndex];
  let current = "";

  const getKeys = () => {
    let keys = [];
    if (
      game.currentMoveIndex < puzzle.legal_san_moves.length &&
      current !== move
    ) {
      puzzle.legal_san_moves[game.currentMoveIndex].forEach((move) => {
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
          game.currentMoveIndex += 2;
          current = "";
          if (game.currentMoveIndex > puzzle.san_moves.length - 1) {
            game.guessing = false;
          }
        }
        buttons = getKeys();
      } else {
        game.failedMoveIndex = game.currentMoveIndex;
        game.fails++;
        game.guessing = false;
      }
    };
  };
</script>

<div>
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
