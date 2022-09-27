import { derived, readable, writable } from "svelte/store";

export const puzzle = writable(null);
export const level = writable(1);
export const lives = readable(3);
export const fails = writable(0);
export const failedMoveIndex = writable(null);

export const next = derived(
  [level, lives, fails],
  ([$level, $lives, $fails]) => {
    return () => {
      if ($fails < $lives) {
        level.set($level + 1);
        failedMoveIndex.set(null);
      } else {
        level.set(1);
        fails.set(0);
        failedMoveIndex.set(null);
      }
    };
  }
);
