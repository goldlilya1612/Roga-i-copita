import React, { useRef, useEffect } from 'react';
import EscapeOutside from "react-escape-outside"
import './Popup.css';


function Popup({onClose, isOpen}) {

    return (
      <EscapeOutside onEscapeOutside={ onClose }>
        <div 
          className={`popup ${isOpen ? 'popup_opened' : ''}`}
          onClick={() => {
            // close modal when outside of modal is clicked
            onClose();
          }}
        >
            <div 
              className={`popup__container`}
              onClick={e => {
                // do not close modal if anything inside modal content is clicked
                e.stopPropagation();
              }}
            >
                <button type="button" className={`popup__close-button`} onClick={ onClose }></button>
                    {/*
                    <h2 className={`popup__heading popup__heading_${props.name}`}>{props.title}</h2>
                    
                    <form className={`popup__form popup__form_${props.name}`} name={props.name} noValidate onSubmit={props.onSubmit}>
                    {props.children}
                    </form> */}
            </div>
        </div>
      </EscapeOutside>
    )      
}

export default Popup; 