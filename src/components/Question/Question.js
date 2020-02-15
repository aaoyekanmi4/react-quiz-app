import React from "react";
import "./Question.css";
const Question = props => {
  let current = props.quiz[props.currentQuestion];

  let answersHTML = props.quiz[props.currentQuestion].answers.map(
    (answer, index) => (
      <div class="answer ">
        <div class="answer-content">
          <input
            type="radio"
            name="answer"
            id={`${index}`}
            value={`${answer}`}
            required
          />

          <label for={`${index}`}>
            <code className="prettyprint lang-js prettyprinted">{`${answer}`}</code>
          </label>
        </div>
      </div>
    )
  );
 const checkAnswer =(userAnswer)=> {
    if (current.correctIndex === userAnswer) {
        return 'correct';
    }
    else {
        return 'incorrect'
    }
 }
  return (
    <section class="quiz-content">
      <h1 class="section-title">Quiz Content</h1>

      <form>
        <fieldset
          class="question-field"
          data-question-index={props.currentQuestion}
        >
          <h4 class="current">
            Question {props.currentQuestion + 1} of {props.quiz.length}
          </h4>
          <span class="number-corr" data-score={props.score}>
            Score: {props.score}
          </span>

          <p class="question">{current.question}</p>
          <p class="arr-box">
            <code className="question-content prettyprint lang-js prettyprinted">
              {current.codeBox}
            </code>
          </p>
          <section class="answers-container">
            {answersHTML}
            <h2 class="section-title"></h2>
          </section>
          <button class="next" onClick={props.changeQuestion}>Next</button>
          <input type="submit" class="answer-button" onClick={props.toggleModal}/>
        </fieldset>
      </form>
    </section>
  );
};

    

export default Question;