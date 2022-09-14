<script>
  export let puzzle;
  export let index;

  let move = "";
  const color = puzzle.fens[index + 1].split(" ")[1];
  const getPly = (fen) => {
    return Number(fen.split(" ").at(-1));
  };
  const ply = 1 + getPly(puzzle.fens[index + 1]) - getPly(puzzle.fens[1]);
  move += String(ply) + (color === "w" ? "." : "...");
  move += puzzle.san_moves[index];
</script>

<div class={color}>
  <strong>
    {move}
  </strong>
</div>
