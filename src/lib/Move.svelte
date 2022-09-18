<script>
  export let puzzle;
  export let moveIndex;
  export let activeFenIndex = undefined;
  export let failed = false;

  let move = "";
  const color = puzzle.fens[moveIndex].split(" ")[1];
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
  class:failed={failed}
  class:pointer={activeFenIndex !== undefined}
  on:click={() => {
    if (activeFenIndex !== undefined) {
      activeFenIndex = moveIndex + 1;
    }
  }}
>
    {move}
</div>

<style>
  div {
    padding: 0.6rem;
    border-radius: 0.3rem;
    margin: 0.6rem 0.2rem;
    border: 0.2rem solid transparent;
    vertical-align: center;
    display: flex;
    justify-content: center;
    font-size: 1.1rem;
  }

  /* div:first-of-type {
    margin-top: 0;
  }

  div:last-of-type {
    margin-bottom: 0;
  } */

  .active {
    border-color: white;
  }

  .w {
    background-color: rgba(255, 255, 255, 0.5);
  }

  .b {
    background-color: rgba(0, 0, 0, 0.5);
  }

  .failed {
    color: red;
  }
</style>
