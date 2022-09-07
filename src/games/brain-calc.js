#!/usr/bin/env node
import {
  askQuestion, getUserAnswer, play, randomNum,
} from '../index.js';

const calc = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unexpected operator: ${operator}`);
  }
};

const generateOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * 3);
  return operators[randomIndex];
};

const requirements = 'What is the result of the expression?';

const game = () => {
  play(requirements, () => {
    const number1 = randomNum();
    const number2 = randomNum();
    const operator = generateOperator();

    askQuestion(`${number1} ${operator} ${number2}`);

    const userAnswer = getUserAnswer();
    const correctAnswer = String(calc(number1, number2, operator));

    return [userAnswer, correctAnswer];
  });
};

export default game;
