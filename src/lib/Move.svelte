<script>
  export let puzzle;
  export let moveIndex;
  export let activeFenIndex = undefined;

  let move = "";
  const color = puzzle.fens[moveIndex + 1].split(" ")[1];
  const getPly = (fen) => {
    return Number(fen.split(" ").at(-1));
  };
  const ply = 1 + getPly(puzzle.fens[moveIndex + 1]) - getPly(puzzle.fens[1]);
  move += String(ply) + (color === "w" ? "." : "...");
  move += puzzle.san_moves[moveIndex];
</script>

<div
  class={color}
  class:active={activeFenIndex === moveIndex + 1}
  on:click={() => {
    if (activeFenIndex !== undefined) {
      activeFenIndex = moveIndex + 1;
    }
  }}
>
  <strong>
    {move}
  </strong>
</div>

<style>
  div {
    padding: 0.5em;
    border-radius: 0.3em;
  }

  .active {
    border: 2px solid white;
  }

  .w {
    background-color: rgba(255, 255, 255, 0.5);
  }

  .b {
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>
