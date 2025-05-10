import type { BoardProps } from "../types/board";
import { calculateWinner } from "../utils/calculateWinner";
import Square from "./Square";

function Board({ xIsNext, squares, onPlay }: BoardProps) {
  function handleClick(i: number) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  const status = winner
    ? 'Winner: ' + winner
    : 'Next player: ' + (xIsNext ? 'X' : 'O');

  return (
    <>
      <div className="status">{status}</div>
      {[0, 1, 2].map(row => (
        <div className="board-row" key={row}>
          {[0, 1, 2].map(col => {
            const idx = row * 3 + col;
            return (
              <Square
                key={idx}
                value={squares[idx]}
                onSquareClick={() => handleClick(idx)}
              />
            );
          })}
        </div>
      ))}
    </>
  );
}

export default Board;
