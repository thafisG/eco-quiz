import { Question } from '../types/quiz';

export const questions: Question[] = [
  {
    id: 1,
    question: "Qual destes hábitos mais economiza água?",
    options: [
      "Tomar banhos mais longos",
      "Escovar os dentes com torneira fechada",
      "Lavar calçada com mangueira",
      "Deixar torneira pingando"
    ],
    correct: 1,
    explanation: "Escovar com torneira fechada economiza até 12 litros de água por minuto! 💧"
  },
  {
    id: 2,
    question: "Qual é o meio de transporte mais sustentável para curtas distâncias?",
    options: [
      "Carro particular",
      "Ônibus coletivo",
      "Bicicleta ou caminhada",
      "Motocicleta"
    ],
    correct: 2,
    explanation: "Bicicleta e caminhada não emitem poluentes e ainda fazem bem à saúde! 🌱"
  },
  {
    id: 3,
    question: "O que significa a sigla 'ODS'?",
    options: [
      "Organização para Desenvolvimento Social",
      "Objetivos de Desenvolvimento Sustentável",
      "Operações de Defesa Ambiental",
      "Ordem para Sustentabilidade Global"
    ],
    correct: 1,
    explanation: "ODS são os 17 Objetivos de Desenvolvimento Sustentável da ONU para 2030! 🌍"
  }
];
