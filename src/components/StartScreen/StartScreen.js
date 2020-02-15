import React from "react";
import './StartScreen.css';
const StartScreen = (props) => {
  return (
    <section className="start-quiz">
      <div className="start-text">
        <h1> JavaScript Array Quiz</h1>

        <button className="start" onClick={props.changeView}>Start Quiz</button>
      </div>
    </section>
  );
};

export default StartScreen;