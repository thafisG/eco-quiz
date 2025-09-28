export interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface QuizState {
  currentQuestion: number;
  score: number;
  showResults: boolean;
  userAnswers: number[];
}
