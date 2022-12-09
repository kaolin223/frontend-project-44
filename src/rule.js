import readlineSync from 'readline-sync';
import { nameUser } from './cli.js';

export default randomNumber = (number = 100) => Math.floor(Math.random() * number);

export function evenGame(ruleGame, question) {
    console.log(ruleGame);
    for (let i = 0; i < 3; i = +1) {
        const [random, answer] = question();
        console.log(`Question: ${random}`);
        const userAnswer = readlineSync.question('Your answer: ');
        if (userAnswer === answer) {
            console.log('Correct! ');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${nameUser}!`);
            return;
        }
    }
    console.log(`Congratulations, ${nameUser}!`);
}