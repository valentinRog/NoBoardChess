<script>
  export let puzzle;
  export let guessing;
  export let failedMove;

  import Move from "./Move.svelte";

  failedMove = undefined;
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
            guessing = false;
          }
        }
        buttons = getKeys();
      } else {
        failedMove = index;
        guessing = false;
      }
    };
  };
</script>

<div>
  <div id="line" class="container">
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

<style>
  #line {
    display: inline-flex;
    justify-content: center;
  }

  #line > div {
    margin: 0 5px;
  }

</style>