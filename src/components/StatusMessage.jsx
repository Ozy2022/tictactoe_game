const StatusMessage = ({ winnerr, gamingBoard }) => {
  
  // instead of a gaming Board.squares we destruct the value by this method
  const {isXNext, squares} = gamingBoard;
  

  const noMovesLeft = squares.every(squareValue => squareValue !== null);

  const nextPlayer = isXNext ? 'X' : 'O';

  const RenderStatusMessage = () => {
    if (winnerr) {
      return (
        <>
          Winner is{' '}
          <span className={isXNext ? 'text-green' : 'text-orange'}>
            {winnerr}
          </span>
        </>
      );
    }

    if (!winnerr && noMovesLeft) {
      return (
        <>
          {' '}
          <span className="text-orange">O</span> and{' '}
          <span className="text-green">X</span> tied
        </>
      );
    }

    if (!winnerr && !noMovesLeft) {
      return (
        <>
          Next Player is{' '}
          <span className={isXNext ? 'text-green' : 'text-orange'}>
            {nextPlayer}
          </span>
        </>
      );
    }

    return null;
  };

  return <div className="status-message">{RenderStatusMessage()}</div>;
};

export default StatusMessage;
