<script>
  import { puzzle } from "../stores";

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
        Object.entries($puzzle.pieces).filter(([k, _]) => k === k.toUpperCase())
      ),
    },
    {
      color: "black",
      pieces: Object.fromEntries(
        Object.entries($puzzle.pieces).filter(([k, _]) => k === k.toLowerCase())
      ),
    },
  ];
</script>

<div id="pieces">
  {#each color_pieces as color}
    <div class="{color.color} container">
      {#each Object.keys(color.pieces) as piece_type}
        <div class={piece_type}>
          <img src={img_srcs[piece_type]} alt={piece_type} />
          <ul>
            {#each color.pieces[piece_type] as square}
              <li>{square}</li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  {/each}
</div>

<style lang="scss">
  @import "../style/vars";
  @import "../style/mix";

  #pieces {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    > div {
      display: flex;
      justify-content: center;
      @include container;
    }
  }

  img {
    width: 7vw;
    min-width: 5rem;
    max-width: 7rem;
  }

  ul {
    padding: 0;
    li {
      list-style-type: none;
      text-align: center;
      font-size: 1.2rem;
      font-weight: bold;
    }
  }
</style>
