function ScoreBoard({ balls, runs }) {
  return (
    <div className="scoreboard">
      <h2>🏏 Cricket Scoreboard</h2>
      <p>Balls: {balls}/6</p>
      <p>Runs: {runs}</p>
    </div>
  );
}

export default ScoreBoard;