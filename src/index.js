import readlineSync from "readline-sync";
import {greeting} from "./cli.js";

export function play(description, callback) {
    const name = greeting();

    console.log(description);

    let successCount = 0;

    while(successCount < 3) {
        let [userAnswer, correctAnswer] = callback();

        if (userAnswer === correctAnswer) {
            console.log('Correct!');
            successCount++;
            checkFinish(successCount, name);
        } else {
            showError(userAnswer, correctAnswer, name);
            break;
        }
    }
}

export function generateNumber(min = 1, max = 100) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

export function checkFinish(successCount, name) {
    if (successCount === 3) {
        console.log(`Congratulations, ${name}!`);
    }
}

export function showError(userAnswer, correctAnswer, name) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
}

export function getUserAnswer() {
    return String(readlineSync.question('Your answer: '));
}

export function askQuestion(question) {
    console.log(`Question: ${question}`);
}
