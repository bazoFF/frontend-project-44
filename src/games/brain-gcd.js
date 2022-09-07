#!/usr/bin/env node
import {
  askQuestion, getUserAnswer, play, randomNum,
} from '../index.js';

const gcd = (a, b) => {
  if (b !== 0) {
    const k = a % b;
    return gcd(b, k);
  }
  return a;
};

const requirements = 'Find the greatest common divisor of given numbers.';

const game = () => {
  play(requirements, () => {
    const number1 = randomNum();
    const number2 = randomNum();

    askQuestion(`${number1} ${number2}`);

    const userAnswer = getUserAnswer();
    const correctAnswer = String(gcd(number1, number2));

    return [userAnswer, correctAnswer];
  });
};

export default game;
