import readlineSync from 'readline-sync';

export function greeting() {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);

    return name;
}

export function end() {
    console.log('\n');
    setTimeout(() => {}, 700)
}

