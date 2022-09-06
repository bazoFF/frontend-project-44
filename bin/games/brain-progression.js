#!/usr/bin/env node
import {
  askQuestion, generateNumber, getUserAnswer, play,
} from '../../src/index.js';

function generateProgression() {
  const itemsCount = generateNumber(5, 10);
  const progressionNumber = generateNumber(2, 10);
  let currentNumber = generateNumber();
  const result = [];

  for (let i = 0; i < itemsCount; i += 1) {
    result.push(currentNumber += progressionNumber);
  }

  return result;
}

play('What number is missing in the progression?', () => {
  const progression = generateProgression();
  const missingNumberIndex = generateNumber(0, progression.length - 1);
  const correctAnswer = String(progression.splice(missingNumberIndex, 1, '..'));

  askQuestion(progression.join(' '));

  const userAnswer = getUserAnswer();

  return [userAnswer, correctAnswer];
});
