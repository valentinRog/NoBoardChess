export const getPuzzle = async level => {
  const res = await fetch(
    `https://valenbel123.pythonanywhere.com/level/${level}`
  );
  const puzzle = await res.json();
  if (res.ok) {
    return puzzle;
  } else {
    throw new Error(puzzle);
  }
};
