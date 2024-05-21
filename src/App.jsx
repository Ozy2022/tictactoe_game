import './styles.scss';
import { useState } from 'react';
import { calculateWinner } from './winner';
import Board from './components/Board';
import StatusMessage from './components/StatusMessage';
function App() {
  const [squares, setSquers] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winnerr = calculateWinner(squares);

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
      <StatusMessage winnerr={winnerr} isXNext={isXNext} squares={squares} />
      <Board squares={squares} HandleSquareClick={HandleSquareClick} />
    </div>
  );
}

export default App;
