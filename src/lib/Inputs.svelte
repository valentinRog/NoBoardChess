<script>
  export let puzzle;
  const keys_name = [
    ["B", "K", "N", "Q", "R"],
    ["a", "b", "c", "d", "e", "f", "g", "h"],
    ["1", "2", "3", "4", "5", "6", "7", "8"],
    ["x", "+", "=", "#", "del"],
  ];
  let moves = [puzzle.san_moves[0]];
  let index = 1;
  let current = "";

  $: checkKey = (key) => {
    for (let i = 0; i < puzzle.legal_san_moves[index].length; i++) {
      if (puzzle.legal_san_moves[index][i].startsWith(current)) {
        if (puzzle.legal_san_moves[index][i][current.length] === key) {
          return false;
        }
      }
    }
    return key !== "del";
  };

  const handleClick = (key) => {
    return () => {
      if (key === "del") {
        current = "";
      } else if (key === puzzle.san_moves[index][current.length]) {
        current += key;
        if (current === puzzle.san_moves[index]) {
          index += 2;
          moves = moves.concat(current);
          moves = moves.concat(puzzle.san_moves[index - 1]);
          console.log(moves);
          current = "";
        }
      }
    };
  };
</script>

<div>
  <div id="moves">
    {#each moves as move, i}
      <p>{i + 1}. {move}</p>
    {/each}
  </div>
  <div>
    {current}
  </div>
  <div id="keys">
    {#each keys_name as row}
      <div>
        {#each row as key}
          <button disabled={checkKey(key)} on:click={handleClick(key)}
            >{key}</button
          >
        {/each}
      </div>
    {/each}
  </div>
</div>
