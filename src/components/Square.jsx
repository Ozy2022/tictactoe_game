const Square = ({ value, onClick }) => {
  return (
    <button type="buttom" className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
