import './styles.scss';
import { useState } from 'react';
import { calculateWinner } from './winner';
import Board from './components/Board';
function App() {
  const [squares, setSquers] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winnerr = calculateWinner(squares);
  const nextPlayer = isXNext ? 'X' : 'O';
  const statusMessage = winnerr
    ? `Winner is ${winnerr}`
    : `Next player is ${nextPlayer}`;
  const HandleSquareClick = clickedPosition => {
    if (squares[clickedPosition] || winnerr) {
      return;
    }
    setSquers(currentSquares => {
      return currentSquares.map((squareVlaue, position) => {
        if (clickedPosition === position) {
          return isXNext ? 'X' : 'O';
        }
        return squareVlaue;
      });
    });

    setIsXNext(currentIsXNext => !currentIsXNext);
  };

  return (
    <div className="app">
      <h2>{statusMessage}</h2>
      <Board squares={squares} HandleSquareClick={HandleSquareClick} />
    </div>
  );
}

export default App;
