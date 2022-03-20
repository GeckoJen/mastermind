import { useState } from "react";
import ColourChoices from "../ColourChoices";
import Gameboard from "../Gameboard";
import "./App.css";

function App() {
  const [won, setWon] = useState(false);

  function handleWin() {
    setWon(true);
  }

  function startNewGame() {
    setWon(false);
    window.location.reload(false);
  }

  return (
    <div className="App">
      <div className="introduction">
        <h1>Mastermind: the game of logical deduction</h1>
           <h2>Welcome, Code Breaker. I am the Code Maker.</h2>
        <p>
          I will randomly choose 4 coloured pegs, and you have to work out what
          I chose. After each guess, I will tell you how close your guess was,
          using red and white pegs.{" "}
        </p>
        <p>
          For each red peg you get, it means you got a correct colour in the
          correct position. For each white peg, you got a correct colour but
          it's in the wrong position. You get no pegs for incorrect colours.{" "}
        </p>
        <button onClick={startNewGame}>
          Click here at any time to start a new game
        </button>
      </div>
      <ColourChoices />
      <Gameboard won={won} handleWin={handleWin} startNewGame={startNewGame} />
    </div>
  );
}

export default App;
