import readlineSync from 'readline-sync';
import greeting from './cli.js';

export const checkFinish = (successCount, name) => {
  if (successCount === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export const showError = (userAnswer, correctAnswer, name) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
};

export const randomNum = (min = 1, max = 100) => Math.floor(min + Math.random() * (max + 1 - min));

export const getUserAnswer = () => String(readlineSync.question('Your answer: '));

export const askQuestion = (question) => console.log(`Question: ${question}`);

export const play = (requirements, callback) => {
  const name = greeting();

  console.log(requirements);

  let successCount = 0;

  while (successCount < 3) {
    const [userAnswer, correctAnswer] = callback();

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      successCount += 1;
      checkFinish(successCount, name);
    } else {
      showError(userAnswer, correctAnswer, name);
      break;
    }
  }
};
