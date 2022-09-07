#!/usr/bin/env node
import {
  askQuestion, getUserAnswer, play, randomNum,
} from '../index.js';

const isEven = (number) => number % 2 === 0;

const requirements = 'Answer "yes" if the number is even, otherwise answer "no".';

const game = () => {
  play(requirements, () => {
    const number = randomNum();
    askQuestion(`${number}`);

    const userAnswer = getUserAnswer();
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    return [userAnswer, correctAnswer];
  });
};

export default game;
