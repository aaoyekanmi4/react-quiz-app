import React from "react";
import "./Question.css";
const Question = props => {
  let current = props.quiz[props.currentQuestion];

  let answersHTML = current.answers.map(
    (answer, index) => (
      <div class="answer ">
        <div class="answer-content">
          <input
            type="radio"
            name="answer"
            key={index}
            id={index}
            value={`${answer}`}
            onChange={props.handleSelection}
            checked={props.selectedAnswer ===`${answer}`}
            required
          />

          <label htmlFor={index}>
            <code className="prettyprint lang-js prettyprinted">{answer}</code>
          </label>
        </div>
      </div>
    )
  );

  return (
    <section class="quiz-content">
      <h1 class="section-title">Quiz Content</h1>

      <form onSubmit ={props.checkAnswer}>
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
          {current.codeBox ?
          <p class="arr-box">
            
            <code className="question-content prettyprint lang-js prettyprinted">
              {current.codeBox}
            </code></p>
            :
            ''}
            <input type="submit" class="answer-button" />
        
          <section class="answers-container">
            {answersHTML}
            <h2 class="section-title"></h2>
          </section>
          
          
        </fieldset>
      </form>
    </section>
  );
};

    

export default Question;