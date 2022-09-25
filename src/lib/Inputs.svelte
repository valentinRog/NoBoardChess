<script>
  import { puzzle, fails, failedMoveIndex } from "../stores";

  export let currentMoveIndex;
  export let guessing;

  $: move = $puzzle.san_moves[currentMoveIndex];
  let current = "";

  const getKeys = () => {
    let keys = [];
    if (
      currentMoveIndex < $puzzle.legal_san_moves.length &&
      current !== move
    ) {
      $puzzle.legal_san_moves[currentMoveIndex].forEach((move) => {
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
          currentMoveIndex += 2;
          current = "";
          if (currentMoveIndex > $puzzle.san_moves.length - 1) {
            guessing = false;
          }
        }
        buttons = getKeys();
      } else {
        $fails++;
        $failedMoveIndex = currentMoveIndex;
        guessing = false;
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
