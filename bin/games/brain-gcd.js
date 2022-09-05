#!/usr/bin/env node
import {askQuestion, generateNumber, getUserAnswer, play} from "../../src/index.js";

main();

function main() {
    play('Find the greatest common divisor of given numbers.', () => {
        const number1 = generateNumber();
        const number2 = generateNumber();

        askQuestion(`${number1} ${number2}`);

        const userAnswer = getUserAnswer();
        const correctAnswer = String(getCorrectAnswer(number1, number2));

        return [userAnswer, correctAnswer];
    });
}

function getCorrectAnswer(number1, number2) {
    const gcd = (a, b) => {
        if (b !== 0) {
            const k = a % b;
            return gcd(b, k);
        }
        return a;
    };

    return gcd(number1, number2);
}
