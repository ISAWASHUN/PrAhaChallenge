import type { SquareProps } from '../types/square';
import './Square.css';

function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button className="square" onClick={onSquareClick}>
      <span style={{ color: 'red' }}>{value}</span>
    </button>
  );
}

export default Square
