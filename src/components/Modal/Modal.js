import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal =(props) => {
    console.log(props);
    // Render nothing if the "show" prop is false
    if(props.show) {
      return null;
    }

    return ReactDOM.createPortal(
      <div 
      onClick={props.close}
      style={{width:'100%', height:'100vh',  position:'absolute', left:0, top:0, background:'rgba(112,112,112, .8)',zIndex:10}}
        className="modal-background"> 
        <div  
          onClick ={(e) => e.stopPropagation()} 
          

          style={{width:'30%', height:'50%',  background:'white', borderRadius:'10px', position:'absolute',  zIndex:100, left:'50%',top:'50%', margin:'-10% -15%'}}>
          {props.children}
         
        
        
        </div>
      </div>, document.getElementById('modal')
    );
  }




export default Modal;