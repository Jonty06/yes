import React from 'react';
import './QABlock.css';



const QABlock  = () => {
    const questions = [
      'What is this Service?',
      'Are there any fees to use this service?',
      'Who is this service provided by?',
      'I have more questions , how can i get additional help?',
    ];
  
    return (
      <div className="qanda-container">
        <h1 className="qanda-heading">Q & H</h1>
        <div className="qanda-content">
          {questions.map((question, index) => (
            <div className="qanda-item" key={index}>
              <h3 className="question">{question}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default QABlock;
  ;
