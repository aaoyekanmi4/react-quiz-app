import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal =(props) => {
    console.log(props);
    // Render nothing if the "show" prop is false
    if(!props.show) {
      return null;
    }

    return ReactDOM.createPortal(
      <div 
        className="modal-background"
       > 
        <div  
          onClick ={(e) => e.stopPropagation()} 
          className="modal-box">
          {props.modalMessage}
          Score: {props.score}/{props.total}
          {props.total === (props.currentQuestion +1) ? <p class="end"><button class="end" onClick={props.changeQuestion}>View Results</button></p>:
          <div className="next-holder">
            
          <button class="next" onClick={props.changeQuestion}>Next</button>
          </div>}
        </div>
      </div>, document.getElementById('modal')
    );
  }




export default Modal;