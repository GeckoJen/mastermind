import React, { useState, useEffect, useDebugValue } from "react";
// import styles from '../../styles/answerblock.module.css'
import "../App/App.css";

function AnswerBlock({ answer, won, startNewGame, usedAllTurns }) {
  return (
    <div>
      {won && (
        <div className="answerHeader">
          <div>
            <button className="startAgainButton" onClick={startNewGame}>
              Congratulations you did it! Start a new game?
            </button>
          </div>

          <div className="answers">
            <div className={answer[0] ? `${answer[0]}` : "grey"}></div>
            <div className={answer[0] ? `${answer[1]}` : "grey"}></div>
            <div className={answer[0] ? `${answer[2]}` : "grey"}></div>
            <div className={answer[0] ? `${answer[3]}` : "grey"}></div>
          </div>
        </div>
      )}
      {!won && !usedAllTurns && (
        <div className="hidden">
          <h6>Guess what combination of colours is under here</h6>
        </div>
      )}

      {usedAllTurns && (
        <div className="answerHeader">
          <button className="startAgainButton" onClick={startNewGame}>
           Start a new game?
          </button>
          <div className="answersFailedBlock">
            <div>
              <p>
                Sorry you didn't quite get there this time. This was the answer:
              </p>
            </div>
            <div className="answers">
              <div className={answer[0] ? `${answer[0]}` : "grey"}></div>
              <div className={answer[0] ? `${answer[1]}` : "grey"}></div>
              <div className={answer[0] ? `${answer[2]}` : "grey"}></div>
              <div className={answer[0] ? `${answer[3]}` : "grey"}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AnswerBlock;
