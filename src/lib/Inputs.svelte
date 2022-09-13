<script>
  export let puzzle;
  export let guessing;

  const trait = puzzle.fens[1].split(" ")[1];
  let index = 1;
  $: move = puzzle.san_moves[index];
  $: moves = puzzle.san_moves.slice(0, index);
  let current = "";

  let buttons = [];
  $: {
    buttons = [];
    if (index < puzzle.legal_san_moves.length) {
      puzzle.legal_san_moves[index].forEach((move) => {
        if (
          move.startsWith(current) &&
          !buttons.includes(move[current.length])
        ) {
          buttons = [...buttons, move[current.length]];
        }
      });
      buttons = buttons.sort();
    }
  }

  const getPrefix = (i) => {
    let prefix =
      trait === "w"
        ? String(Math.floor(i / 2) + 1)
        : String(Math.ceil(i / 2) + 1);
    prefix += (i + Number(trait === "b")) % 2 ? "..." : ".";
    return prefix;
  };

  const handleClick = (letter) => {
    return () => {
      if (letter === move[current.length]) {
        current += letter;
        if (current === move) {
          index += 2;
          current = "";
          if (index > puzzle.san_moves.length - 1) {
            guessing = false;
          }
        }
      }
    };
  };
</script>

<div>
  {#each moves as move, i}
    <div>
      {getPrefix(i)}{move}
    </div>
  {/each}
  <div>
    {current}
  </div>
  {#each buttons as button}
    <button on:click={handleClick(button)}>{button}</button>
  {/each}
</div>
