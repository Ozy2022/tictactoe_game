const StatusMessage = ({ winnerr, isXNext, squares }) => {
  /* This line of code is checking if there are no more moves left in the game by using the `every`
  method on the `squares` array. It checks if every element in the `squares` array is not equal to
  `null`. If all elements are not `null`, it means there are no more moves left in the game. The
  result is stored in the `noMovesLeft` constant as a boolean value. */

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
