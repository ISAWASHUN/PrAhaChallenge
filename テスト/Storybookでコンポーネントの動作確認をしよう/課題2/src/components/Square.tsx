import type { SquareProps } from '../types/square';
import './Square.css';

function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square
