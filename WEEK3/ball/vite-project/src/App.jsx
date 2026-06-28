import { useState } from "react";
import "./App.css";
import ScoreBoard from "./components/ScoreBoard";
import Controls from "./components/Controls";

function App() {
  const [balls, setBalls] = useState(0);
  const [runs, setRuns] = useState(0);

  const hitBall = () => {
    if (balls < 6) {
      const randomRun = Math.floor(Math.random() * 7);

      setBalls((prev) => prev + 1);
      setRuns((prev) => prev + randomRun);
    }
  };

  const resetGame = () => {
    setBalls(0);
    setRuns(0);
  };

  return (
    <div className="app">
      <ScoreBoard balls={balls} runs={runs} />

      <Controls
        hitBall={hitBall}
        resetGame={resetGame}
        balls={balls}
      />

      {balls === 6 && (
        <h3>Game Over! Total Runs: {runs}</h3>
      )}
    </div>
  );
}

export default App;