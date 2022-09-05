import readlineSync from "readline-sync";
import {end, greeting} from "./cli.js";

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
        }
    }

    end();
}

export function generateNumber() {
    return Math.floor(Math.random() * 100) + 1;
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
