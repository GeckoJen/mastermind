import React, { useState, useEffect, useRef } from "react";
import AnswerBlock from "../AnswerBlock/";
import GuessBlock from "../GuessBlock";
import Confetti from "react-confetti";


function Gameboard({ won, handleWin, startNewGame }) {
  const [answer, setAnswer] = useState([]);

  const colours = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "black",
    "white",
    ];
    
    const scrollToSection = useRef();

    const [usedAllTurns, setUsedAllTurns] = useState(false)




  function generateAnswer() {
    setAnswer([
      colours[Math.floor(Math.random() * 8)],
      colours[Math.floor(Math.random() * 8)],
      colours[Math.floor(Math.random() * 8)],
      colours[Math.floor(Math.random() * 8)],
    ]);
  }

  useEffect(() => {
      generateAnswer();
      
  }, []);

  const [guesses, setGuesses] = useState([]);
  const [clickCount, setClickCount] = useState(0);

  const [currentGuess, setCurrentGuess] = useState([
    "grey",
    "grey",
    "grey",
    "grey",
  ]);
  const [currentScore, setCurrentScore] = useState([]);

  function changeColour(e) {
    const index = Number(e.target.id);
    setClickCount((clickCount + 1) % 8);
    setCurrentGuess([
      ...currentGuess.slice(0, index),
      colours[clickCount],
      ...currentGuess.slice(index + 1),
    ]);
  }

    function validateGuess() {
       
        scrollToSection.current.scrollIntoView({ behavior: "smooth" });
   
    const testGuess = [...currentGuess];
    const testAnswer = [...answer];
    if (currentGuess.includes("grey")) {
      alert("Please select all four colours");
    } else {
      if (answer.join() === currentGuess.join()) {
        handleWin();
      } else {
         
        let score = ["xscore", "xscore", "xscore", "xscore"];
        answer.forEach((element, index) => {
          if (element === testGuess[index]) {
            score.unshift("redscore");
            testGuess[index] = "done";
            testAnswer[index] = "used";
          }
        });
        testAnswer.forEach((element) => {
          if (testGuess.includes(element)) {
            score.unshift("whitescore");
            const ind = testGuess.findIndex((elt) => elt === element);
            testGuess[ind] = "done";
          }
        });
        score.sort();
        setCurrentScore([...score.slice(0, 4)]);
      }
    }
  }

  useEffect(() => {
    if (!currentGuess.includes("grey")) {
      setGuesses([...guesses, { guess: currentGuess, score: currentScore }]);
      setCurrentGuess(["grey", "grey", "grey", "grey"]);
      }
      
  }, [currentScore]);
    
    useEffect(() => {
        if(guesses.length > 3) {setUsedAllTurns(true)}
    }, [guesses])

  return (
    <div className="wholeGameBoard">
          <AnswerBlock answer={answer} won={won} startNewGame={startNewGame} usedAllTurns={usedAllTurns}/>
      <GuessBlock
        guesses={guesses}
        currentGuess={currentGuess}
        changeColour={changeColour}
              validateGuess={validateGuess}
              usedAllTurns={usedAllTurns}
      />
      <div ref={scrollToSection}></div>
      {won && <Confetti width="1000" height="1000" numberOfPieces="1000" />}
    </div>
  );
}

export default Gameboard;
