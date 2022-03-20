import React from "react";
import "../App/App.css";

function GuessBlock({
  guesses,
  currentGuess,
  changeColour,
  validateGuess,
  usedAllTurns,
}) {
  return (
      <div className="wholeGuessBlock">
          
          {!usedAllTurns && (

      <div className="currentGuessWholeRow">
        <div className="currentGuess">
          {currentGuess.map((element, index) => {
            return (
              <div
                className={element}
                key={index}
                id={index}
                onClick={(e) => {
                  changeColour(e);
                }}
              ></div>
            );
          })}
        </div>

        <button className="guessButton" onClick={validateGuess}>
          Guess
        </button>
      </div>

          )}

      {/* {usedAllTurns && <p>Sorry you've used up all your guesses</p>} */}

      {guesses && (
        <div className="previousGuesses">
          {guesses.map((element, index) => {
            return (
              <div className="guessWholeRow" key={index}>
                <div className="guessColours">
                  <div className={element.guess[0]}></div>
                  <div className={element.guess[1]}></div>
                  <div className={element.guess[2]}></div>
                  <div className={element.guess[3]}></div>
                </div>
                <div className="guessScore">
                  <div className={element.score[0]}></div>
                  <div className={element.score[1]}></div>
                  <div className={element.score[2]}></div>
                  <div className={element.score[3]}></div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default GuessBlock;
