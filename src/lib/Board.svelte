<script>
  import { onMount } from "svelte";
  import { Chessboard } from "cm-chessboard/src/cm-chessboard/Chessboard";
  import Sprites from "cm-chessboard/assets/images/chessboard-sprite-staunty.svg";
  import "cm-chessboard/assets/styles/cm-chessboard.css";

  export let puzzle;

  let board;

  onMount(() => {
    board = new Chessboard(document.getElementById("containerId"), {
      position: puzzle.fen,
      sprite: {
        url: Sprites,
      },
    });
  });

  let i = 0;
  const handleClick = () => {
    i++;
    i %= puzzle.fens.length;
    board.setPosition(puzzle.fens[i], true);
  };
</script>

<div id="containerId" />
<button on:click={handleClick}>Move</button>
