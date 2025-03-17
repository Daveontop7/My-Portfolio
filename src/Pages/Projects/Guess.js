import React, { useState } from 'react';
import './Guess.css';

const GuessingGame = () => {
  const [targetNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('Try to guess the number between 1 and 100!');
  const [attempts, setAttempts] = useState(0);

  const handleGuess = () => {
    const numericGuess = parseInt(guess);
    if (isNaN(numericGuess)) {
      setMessage('Please enter a valid number.');
      return;
    }

    setAttempts(prev => prev + 1);

    if (numericGuess === targetNumber) {
      setMessage(`🎉 Correct! The number was ${targetNumber}. You guessed it in ${attempts + 1} tries!`);
    } else if (numericGuess < targetNumber) {
      setMessage('🔼 Too low! Try again.');
    } else {
      setMessage('🔽 Too high! Try again.');
    }

    setGuess('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleGuess();
    }
  };

  return (
    <div className="game-container">
      <h2>🎮 Number Guessing Game</h2>
      <p>{message}</p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter your guess"
      />
      <button onClick={handleGuess}>Guess</button>
    </div>
  );
};

export default GuessingGame;
