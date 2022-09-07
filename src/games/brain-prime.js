#!/usr/bin/env node
import {
  askQuestion, getUserAnswer, play, randomNum,
} from '../index.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return number > 1;
};

const requirements = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const game = () => {
  play(requirements, () => {
    const number = randomNum(1, 11);

    askQuestion(number);

    const userAnswer = getUserAnswer();
    const correctAnswer = isPrime(number) ? 'yes' : 'no';

    return [userAnswer, correctAnswer];
  });
};

export default game;
