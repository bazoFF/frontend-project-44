#!/usr/bin/env node
import {askQuestion, generateNumber, getUserAnswer, play} from "../../src/index.js";

main();

function main() {
    play('Answer "yes" if the number is even, otherwise answer "no".', () => {
        const number = generateNumber();
        askQuestion(`${number}`);

        const userAnswer = getUserAnswer();
        const correctAnswer = getCorrectAnswer(number);

        return [userAnswer, correctAnswer];
    });
}

function getCorrectAnswer(number) {
    return number % 2 === 0 ? 'yes' : 'no';
}
