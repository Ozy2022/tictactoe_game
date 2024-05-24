const StatusMessage = ({ winner, gamingBoard }) => {
  // instead of a gaming Board.squares we destruct the value by this method
  const { isXNext, squares } = gamingBoard;

  const noMovesLeft = squares.every(squareValue => squareValue !== null);

  const nextPlayer = isXNext ? 'X' : 'O';

  const RenderStatusMessage = () => {
    if (winner) {
      return (
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      );
    }

    if (!winner && noMovesLeft) {
      return (
        <>
          {' '}
          <span className="text-orange">O</span> and{' '}
          <span className="text-green">X</span> tied
        </>
      );
    }

    if (!winner && !noMovesLeft) {
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

  return <h2 className="status-message">{RenderStatusMessage()}</h2>;
};

export default StatusMessage;
