<script>
  import { puzzle, failedMoveIndex } from "../stores";

  export let moveIndex;
  export let activeFenIndex = null;

  let move = "";
  const color = $puzzle.fens[moveIndex].split(" ")[1];
  const getPly = (fen) => {
    return Number(fen.split(" ").at(-1));
  };
  const ply = 1 + getPly($puzzle.fens[moveIndex + 1]) - getPly($puzzle.fens[1]);
  move += String(ply) + (color === "w" ? "." : "...");
  move += $puzzle.san_moves[moveIndex];
</script>

<div
  class={color}
  class:active={activeFenIndex === moveIndex + 1}
  class:failed={moveIndex === $failedMoveIndex}
  class:pointer={activeFenIndex !== null}
  on:click={() => {
    if (activeFenIndex !== null) {
      activeFenIndex = moveIndex + 1;
    }
  }}
>
  {move}
</div>

<style lang="scss">
  @import "../style/vars";

  div {
    padding: 0.5rem;
    border-radius: $radius;
    border: 2px solid transparent;
    vertical-align: center;

    &.w {
      background-color: $light-white;
    }
    &.b {
      background-color: $light-black;
    }
    &.active {
      border-color: white;
    }
    &.failed {
      color: $red;
    }
  }
</style>
