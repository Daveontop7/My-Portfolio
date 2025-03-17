import React, { useState } from 'react';
import './Quiz.css';

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript",
  },
  {
    question: "What year was React released?",
    options: ["2013", "2015", "2010", "2018"],
    answer: "2013",
  },
  {
    question: "Who is the CEO of Tesla?",
    options: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Tony Stark"],
    answer: "Elon Musk",
  },
];

const QuizGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="quiz-container">
      <h2>🧠 Quiz Game</h2>
      {showResult ? (
        <div className="result-section">
          <h3>Your Score: {score} / {questions.length}</h3>
          <button onClick={restartQuiz}>Play Again</button>
        </div>
      ) : (
        <div className="question-section">
          <h3>{questions[currentQuestion].question}</h3>
          <div className="options-section">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizGame;
