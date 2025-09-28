import React, { useState } from 'react';
import { QuizState, Question } from '../types/quiz';
import QuestionComponent from './Question';
import Results from './Results';

interface QuizProps {
  questions: Question[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    score: 0,
    showResults: false,
    userAnswers: []
  });

  const handleAnswer = (selectedOption: number) => {
    const isCorrect = selectedOption === questions[quizState.currentQuestion].correct;
    
    const newState: QuizState = {
      ...quizState,
      score: isCorrect ? quizState.score + 1 : quizState.score,
      userAnswers: [...quizState.userAnswers, selectedOption]
    };

    if (quizState.currentQuestion + 1 < questions.length) {
      newState.currentQuestion = quizState.currentQuestion + 1;
    } else {
      newState.showResults = true;
    }

    setQuizState(newState);
  };

  const restartQuiz = () => {
    setQuizState({
      currentQuestion: 0,
      score: 0,
      showResults: false,
      userAnswers: []
    });
  };

  if (quizState.showResults) {
    return (
      <Results 
        score={quizState.score}
        totalQuestions={questions.length}
        questions={questions}
        userAnswers={quizState.userAnswers}
        onRestart={restartQuiz}
      />
    );
  }

  return (
    <div className="quiz-container">
      <div className="progress">
        Pergunta {quizState.currentQuestion + 1} de {questions.length}
      </div>
      
      <QuestionComponent
        question={questions[quizState.currentQuestion]}
        questionNumber={quizState.currentQuestion + 1}
        onAnswer={handleAnswer}
      />
    </div>
  );
};

export default Quiz;
