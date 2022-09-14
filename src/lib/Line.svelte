<script>
  export let puzzle;
  export let moves;
  export let index = 0;

  const trait = puzzle.fens[1].split(" ")[1];

  const getPrefix = (i) => {
    let prefix =
      trait === "w"
        ? String(Math.floor(i / 2) + 1)
        : String(Math.ceil(i / 2) + 1);
    prefix += (i + Number(trait === "b")) % 2 ? "..." : ".";
    return prefix;
  };
</script>

<div>
  {#each moves as move, i}
    <div
      on:click={() => {
        index = i + 1;
      }}
    >
      {getPrefix(i)}{move}
    </div>
  {/each}
</div>
