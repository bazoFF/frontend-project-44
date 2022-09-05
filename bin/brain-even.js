#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {end, greeting} from '../src/cli.js';

main();

function main() {
    const name = greeting()

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let successCount = 0;

    while(successCount < 3) {
        const number = generateNumber();
        console.log(`Question: ${number}`);

        const userAnswer = String(readlineSync.question('Your answer: '));
        const correctAnswer = getCorrectAnswer(number);

        if (userAnswer === correctAnswer) {
            console.log('Correct!');
            successCount++;
            checkFinish(successCount, name);
        } else {
            showError(userAnswer, correctAnswer, name);
        }
    }

    end();
}

function getCorrectAnswer(number) {
    return number % 2 === 0 ? 'yes' : 'no';
}

function generateNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function checkFinish(successCount, name) {
    if (successCount === 3) {
        console.log(`Congratulations, ${name}!`);
    }
}

function showError(userAnswer, correctAnswer, name) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
}
