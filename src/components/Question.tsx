import React from 'react';
import { Question } from '../types/quiz';

interface QuestionProps {
  question: Question;
  questionNumber: number;
  onAnswer: (selectedOption: number) => void;
}

const QuestionComponent: React.FC<QuestionProps> = ({ 
  question, 
  questionNumber, 
  onAnswer 
}) => {
  return (
    <div className="question-card">
      <h2>Pergunta {questionNumber}</h2>
      <p className="question-text">{question.question}</p>
      
      <div className="options-container">
        {question.options.map((option, index) => (
          <button
            key={index}
            className="option-button"
            onClick={() => onAnswer(index)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionComponent;
