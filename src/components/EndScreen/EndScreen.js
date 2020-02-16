import React from 'react';
import './EndScreen.css';

const EndScreen = (props) => {
    const generateEndMessage = ()=> {
        if (props.score === props.quiz.length) {
            return "You got them all right! Great Job!"
        }
        else if (props.score >= 4){
            return "Great Job! You only missed a couple: "
        }
        else if (props.score >=2) {
            return "That's a decent start. Here are a few topics to review:"
        }
        else {
            return "Your knowledge of JavaScript array methods need some work. Here are some topics to review:"
        }
    }
    
    return (
        <div className="end-quiz">
        <h1> Thanks for Taking the Quiz!</h1> 
        <br/>
        <p class="show-score">Your Score: {props.score}/{props.quiz.length}</p>
        <p class="end-message">{generateEndMessage()}</p>
        
        <ul class= "review">{props.reviewTopics}</ul>
        <br/>
        <p>Take the quiz again!</p>
        <p class=".start-align"><button class="start" onClick={props.restart}>Start Quiz</button></p>
        </div>
    )
}

export default EndScreen;