#!/usr/bin/env node
import {
  askQuestion, generateNumber, getUserAnswer, play,
} from '../../src/index.js';

function getCorrectAnswer(number) {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }

  return number > 1 ? 'yes' : 'no';
}

play('Answer "yes" if given number is prime. Otherwise answer "no".', () => {
  const number = generateNumber(1, 11);

  askQuestion(number);

  const userAnswer = getUserAnswer();
  const correctAnswer = getCorrectAnswer(number);

  return [userAnswer, correctAnswer];
});
