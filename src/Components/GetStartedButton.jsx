import React, { useState } from 'react';
import './GetStartedButton.css';

const GetStartedButton = () => {
    const [isHoveredButton1, setIsHoveredButton1] = useState(false);
    const [isHoveredButton2, setIsHoveredButton2] = useState(false);
  
    const handleMouseEnterButton1 = () => {
      setIsHoveredButton1(true);
    };
  
    const handleMouseLeaveButton1 = () => {
      setIsHoveredButton1(false);
    };
  
    const handleMouseEnterButton2 = () => {
      setIsHoveredButton2(true);
    };
  
    const handleMouseLeaveButton2 = () => {
      setIsHoveredButton2(false);
    };
  
    return (
      <div className="button-container">
        <button
          className={`button ${isHoveredButton1 ? 'hovered' : ''}`}
          onMouseEnter={handleMouseEnterButton1}
          onMouseLeave={handleMouseLeaveButton1}
        >
          Get Started
        </button>
        <button
          className={`button ${isHoveredButton2 ? 'hovered' : ''}`}
          onMouseEnter={handleMouseEnterButton2}
          onMouseLeave={handleMouseLeaveButton2}
        >
          Sign In
        </button>
      </div>
    );
  };
  
  export default GetStartedButton;
