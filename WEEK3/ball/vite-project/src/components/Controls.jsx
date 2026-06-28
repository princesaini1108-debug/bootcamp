function Controls({ hitBall, resetGame, balls }) {
  return (
    <div className="buttons">
      <button onClick={hitBall} disabled={balls === 6}>
        Click to Hit the Ball
      </button>

      <button onClick={resetGame}>
        Reset
      </button>
    </div>
  );
}

export default Controls;