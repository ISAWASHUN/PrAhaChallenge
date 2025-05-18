export function calculateWinner(squares: Array<string | null>): string | null {
  const lines = [
    // 横のライン
    [0, 1, 2],
    [1, 2, 3],
    [4, 5, 6],
    [5, 6, 7],
    [8, 9, 10],
    [9, 10, 11],
    // 縦のライン
    [0, 4, 8],
    [1, 5, 9],
    [2, 6, 10],
    [3, 7, 11],
    // 斜めのライン
    [0, 5, 10],
    [4, 1, 10],
    [2, 5, 8],
    [6, 5, 4],
    [3, 6, 9],
  ];
  for (const [a, b, c] of lines) {
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }
  return null;
}
