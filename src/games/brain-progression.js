#!/usr/bin/env node
import {
  askQuestion, getUserAnswer, play, randomNum,
} from '../index.js';

const generateProgression = () => {
  const itemsCount = randomNum(5, 10);
  const progressionNumber = randomNum(2, 10);
  let currentNumber = randomNum();
  const result = [];

  for (let i = 0; i < itemsCount; i += 1) {
    result.push(currentNumber += progressionNumber);
  }

  return result;
};

const requirements = 'What number is missing in the progression?';

const game = () => {
  play(requirements, () => {
    const progression = generateProgression();
    const missingNumberIndex = randomNum(0, progression.length - 1);
    const correctAnswer = String(progression.splice(missingNumberIndex, 1, '..'));

    askQuestion(progression.join(' '));

    const userAnswer = getUserAnswer();

    return [userAnswer, correctAnswer];
  });
};

export default game;
