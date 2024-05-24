import './styles.scss';
import { useState } from 'react';
import { calculateWinner } from './winner';
import Board from './components/Board';
import StatusMessage from './components/StatusMessage';
import History from './components/History';
function App() {
  const [history, setHistory] = useState([
    { squares: Array(9).fill(null), isXNext: false },
  ]);

  const [currentMove, setCurrentMove] = useState(0);
  const gamingBoard = history[currentMove];

  const winnerr = calculateWinner(gamingBoard.squares);

  const HandleSquareClick = clickedPosition => {
    if (gamingBoard.squares[clickedPosition] || winnerr) {
      return;
    }
    setHistory(currentHistory => {
      const isTraversing = currentHistory + 1 !== currentHistory.length;

      const lastGamingState = isTraversing
        ? currentHistory[currentMove]
        : history[history.length - 1];

      const nextSquaresState = lastGamingState.squares.map(
        (squareVlaue, position) => {
          if (clickedPosition === position) {
            return lastGamingState.isXNext ? 'X' : 'O';
          }
          return squareVlaue;
        }
      );

      const base = isTraversing
        ? currentHistory.slice(0, currentHistory.indexOf(lastGamingState) + 1)
        : currentHistory;

      return base.concat({
        squares: nextSquaresState,
        isXNext: !lastGamingState.isXNext,
      });
    });

    setCurrentMove(move => move + 1);
  };

  const MoveTo = move => {
    setCurrentMove(move);
  };

  return (
    <div className="app">
      <StatusMessage winnerr={winnerr} gamingBoard={gamingBoard} />
      <Board
        squares={gamingBoard.squares}
        HandleSquareClick={HandleSquareClick}
      />
      <h2>Current Game History</h2>
      <History history={history} MoveTo={MoveTo} currentMove={currentMove} />
    </div>
  );
}

export default App;
