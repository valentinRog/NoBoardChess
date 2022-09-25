import { readable, writable } from "svelte/store";

export const puzzle = writable(null);
export const level = writable(1);
export const lives = readable(3);
export const fails = writable(0);
export const failedMoveIndex = writable(null);