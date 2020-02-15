import React, {useState} from 'react';
import Question from '../Question/Question';
import EndScreen from '../EndScreen/EndScreen';
import StartScreen from '../StartScreen/StartScreen';
import Modal from '../Modal/Modal';
import QUIZ from '../../QUIZ';
import './App.css';

function App() {
  const [quiz, setQuiz] = useState(QUIZ); 
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [status, setStatus] =useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  const changeQuestion = () => {
    if(currentQuestion !==quiz.length-1){
      console.log(quiz.length);
      console.log(currentQuestion);
      setCurrentQuestion((prev) => prev +1);
    }
    else {
      setStatus(2)
    }
  
  }
 
  const changeView = () => {
    setStatus((prev) => {
      if(prev< 2){
        return prev +1
      }
      else {
        return 0;
      }
    })
  }
  const showView =() => {
    if (status===0){
      return <StartScreen changeView={changeView}/>
    }
    else if (status ===1) {
      return  <Question quiz={quiz}  currentQuestion={currentQuestion} changeQuestion={changeQuestion} score={score} changeView={changeView}
      toggleModal={toggleModal}/>
    }
    else {
      return  <EndScreen /> 
    }
  }
  return (
    <div className="App">
      
    {showView()}
    <Modal show={isModalOpen} close={toggleModal}/>
   
    </div>
  );
}

export default App;
