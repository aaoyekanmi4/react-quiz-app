import React, { useState } from "react";
import Question from "../Question/Question";
import EndScreen from "../EndScreen/EndScreen";
import StartScreen from "../StartScreen/StartScreen";
import Modal from "../Modal/Modal";
import QUIZ from "../../QUIZ";
import "./App.css";


function App() {
  const [quiz, setQuiz] = useState(QUIZ);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [modalMessage, setModalMessage] =useState('');
  const [reviewTopics, setReviewTopics] = useState([]);


  
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const changeQuestion = () => {
    if (currentQuestion !== quiz.length - 1) {
      toggleModal();
      setCurrentQuestion(prev => prev + 1);
    } else {
      return;
    }
  };
  const handleSelection = changeEvent => {
    console.log(changeEvent.target.value);
    setSelectedAnswer(changeEvent.target.value);
    
  };
  const checkAnswer = event => {
    event.preventDefault();
    if (`${selectedAnswer}` === `${quiz[currentQuestion].correctAnswer}`) {
      setScore(prev => prev + 1);
      setModalMessage(
        <div className="modal-message">
          <h1 className="correct">That's Correct!</h1>
        </div>
      );

      toggleModal();
    
    }
    else {
      setModalMessage(
        <div className="modal-message ">
          <h1 className="incorrect">Sorry, that was  incorrect</h1>
          <p>The correct answer was:</p> 
          <p>{quiz[currentQuestion].correctAnswer}</p>
        </div>
     
      )
      setReviewTopics(prev => prev.concat(quiz[currentQuestion].topic))
   
      toggleModal();
    }
  }

  const changeView = () => {
    setStatus(prev => {
      if (prev < 2) {
        return prev + 1;
      } else {
        return 0;
      }
    });
  };
  const showView = () => {
    if (status === 0) {
      return <StartScreen changeView={changeView} />;
    } else if (status === 1) {
      return (
        <Question
          quiz={quiz}
          currentQuestion={currentQuestion}
          score={score}
          toggleModal={toggleModal}
          handleSelection ={handleSelection}
          selectedAnswer={selectedAnswer}
          checkAnswer={checkAnswer}
        />
      );
    } else {
      return <EndScreen />;
    }
  };
  return (
    <div className="App">
      {showView()}
      <Modal
        show={isModalOpen}
        close={toggleModal}
        changeQuestion={changeQuestion}
        changeView={changeView}
        modalMessage={modalMessage}
        score={score}
        total={quiz.length}
      />
    </div>
  );
}

export default App;
