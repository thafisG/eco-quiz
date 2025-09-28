import React from 'react';
import { Question } from '../types/quiz';

interface ResultsProps {
  score: number;
  totalQuestions: number;
  questions: Question[];
  userAnswers: number[];
  onRestart: () => void;
}

const Results: React.FC<ResultsProps> = ({ 
  score, 
  totalQuestions, 
  questions, 
  userAnswers, 
  onRestart 
}) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="results-container">
      <h2>Seu Resultado! 🎉</h2>
      <div className="score-circle">
        <span className="score">{score}/{totalQuestions}</span>
        <span className="percentage">{percentage}%</span>
      </div>

      <div className="feedback">
        {percentage >= 70 && "Parabéns! Você é um expert em sustentabilidade! 🌟"}
        {percentage >= 40 && percentage < 70 && "Bom trabalho! Continue aprendendo sobre sustentabilidade! 💚"}
        {percentage < 40 && "Não desanime! Sustentabilidade é uma jornada de aprendizado! 🌱"}
      </div>

      <button className="restart-button" onClick={onRestart}>
        Jogar Novamente
      </button>
    </div>
  );
};

export default Results;
