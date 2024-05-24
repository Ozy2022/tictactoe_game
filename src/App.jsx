import './styles.scss';
import { useState } from 'react';
import { calculateWinner } from './winner';
import Board from './components/Board';
import StatusMessage from './components/StatusMessage';
import History from './components/History';

const NEW_GAME = [{ squares: Array(9).fill(null), isXNext: false }];

function App() {
  const [history, setHistory] = useState(NEW_GAME);

  const [currentMove, setCurrentMove] = useState(0);
  const gamingBoard = history[currentMove];

  const {winnerr, winningSquares} = calculateWinner(gamingBoard.squares);

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

  const onNewGameStart = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };

  return (
    <div className="app">
      <StatusMessage winnerr={winnerr} gamingBoard={gamingBoard} />
      <Board
        squares={gamingBoard.squares}
        HandleSquareClick={HandleSquareClick}
        winningSquares = {winningSquares}
      />
      <button
        type="button"
        onClick={onNewGameStart}
        className={`btn-reset ${winnerr ? 'active' : ''}`}
      >
        Start a New Game
      </button>

      <h2>Current Game History</h2>
      <History history={history} MoveTo={MoveTo} currentMove={currentMove} />
    </div>
  );
}

export default App;
