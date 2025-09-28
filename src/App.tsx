import React from 'react';
import Quiz from './components/Quiz';
import { questions } from './data/questions';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="app-header">
        <h1>🌱 EcoQuiz</h1>
        <p>Teste seus conhecimentos sobre sustentabilidade!</p>
      </header>
      
      <main>
        <Quiz questions={questions} />
      </main>
      
      <footer>
        <p>Desenvolvido para o Workshop Internacional de Mudanças Climáticas e Biodiversidade</p>
      </footer>
    </div>
  );
};

export default App;
