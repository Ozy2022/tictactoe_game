const Square = ({ value, onClick, isWinningSquare }) => {
  const ColorClassName = value === 'X' ? 'text-green' : 'text-orange';
  const winningClassName = isWinningSquare ? 'winning' : '';

  return (
    <button
      type="buttom"
      className={`square ${ColorClassName} ${winningClassName}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
