import readlineSync from 'readline-sync';
import { phrases, greetings, matter, wrongAnswer, congratulation } from '../src/repeatingText.js';

const logicGame = (description, getRound) => {
    console.log(phrases.GREETING);
    const nameUser = readlineSync.question(phrases.ASK_NAME);
    console.log(greetings(nameUser));
    console.log(description);
    for (let i = 1; i <= 3; i += 1) {
        const [question, correctAnswer] = getRound();
        console.log(matter(question));
        const userAnswer = readlineSync.question(phrases.ANSWER);
        if (userAnswer === correctAnswer) {
            console.log(phrases.CORRECT_ANSWER);
        } else {
            console.log(wrongAnswer(userAnswer, correctAnswer, nameUser));
            return;
        }
    }
    console.log(congratulation(nameUser));
};

export default logicGame;
export const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min)) + min;
