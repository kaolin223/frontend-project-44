import readlineSync from 'readline-sync';
import { repeatingText, greetings, matter, wrongAnswer, congratulation } from './repeatingText.js';

const logicGame = (description, getRound) => {
    console.log(repeatingText.GREETINGS);
    const nameUser = readlineSync.question(repeatingText.ASK_NAME);
    console.log(greetings(nameUser));
    console.log(description);
    for (let i = 1; i <= 3; i += 1) {
        const [question, correctAnswer] = getRound();
        console.log(matter(question));
        const userAnswer = readlineSync.question(repeatingText.ANSWER);
        if (userAnswer === correctAnswer) {
            console.log(repeatingText.CORRECT_ANSWER);
        } else {
            console.log(wrongAnswer(userAnswer, correctAnswer, nameUser));
            return;
        }
    }
    console.log(congratulation(nameUser));
};

export default logicGame;