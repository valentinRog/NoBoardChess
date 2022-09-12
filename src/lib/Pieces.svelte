<script>
  export let pieces;

  import b from "../assets/bB.svg";
  import k from "../assets/bK.svg";
  import n from "../assets/bN.svg";
  import p from "../assets/bP.svg";
  import q from "../assets/bQ.svg";
  import r from "../assets/bR.svg";
  import B from "../assets/wB.svg";
  import K from "../assets/wK.svg";
  import N from "../assets/wN.svg";
  import P from "../assets/wP.svg";
  import Q from "../assets/wQ.svg";
  import R from "../assets/wR.svg";

  const img_srcs = {
    b: b,
    k: k,
    n: n,
    p: p,
    q: q,
    r: r,
    B: B,
    K: K,
    N: N,
    P: P,
    Q: Q,
    R: R,
  };

  let color_pieces = [
    {
      color: "white",
      pieces: Object.fromEntries(
        Object.entries(pieces).filter(([k, _]) => k === k.toUpperCase())
      ),
    },
    {
      color: "black",
      pieces: Object.fromEntries(
        Object.entries(pieces).filter(([k, _]) => k === k.toLowerCase())
      ),
    },
  ];
</script>

<div id="pieces">
  {#each color_pieces as color}
    <div class={color.color}>
      {#each Object.keys(color.pieces) as piece_type}
        <img src={img_srcs[piece_type]} alt="yo" />
        <ul>
            {#each color.pieces[piece_type] as square}
                <li>{square}</li>
            {/each}
        </ul>
      {/each}
    </div>
  {/each}
</div>

<style>
  img {
    width: 150px;
    height: 150px;
  }
</style>
