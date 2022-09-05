#!/usr/bin/env node
import {askQuestion, generateNumber, getUserAnswer, play} from "../../src/index.js";

main();

function main() {
    play('What is the result of the expression?', () => {
        const number1 = generateNumber();
        const number2 = generateNumber();
        const operator = generateOperator();

        askQuestion(`${number1} ${operator} ${number2}`);

        const userAnswer = getUserAnswer();
        const correctAnswer = String(getCorrectAnswer(number1, number2, operator));

        return [userAnswer, correctAnswer];
    });
}

function getCorrectAnswer(number1, number2, operator) {
    switch(operator) {
        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;
        case '*':
            return number1 * number2;
    }
}

function generateOperator() {
    const operators = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * 3);
    return operators[randomIndex];
}
