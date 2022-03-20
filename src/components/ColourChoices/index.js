import React from "react";
// import styles from "../../styles/colourchoices.module.css";
import '../App/App.css'

function ColourChoices() {
  return (
    <div className='colourBlock'>
      <h2>Available colours</h2>
      <div className='colours'>
        <div className='red'></div>
        <div className='orange'></div>
        <div className='yellow'></div>
        <div className='green'></div>
        <div className='blue'></div>
        <div className='purple'></div>
        <div className='black'></div>
        <div className='white'></div>
      </div>
    </div>
  );
}

export default ColourChoices;
