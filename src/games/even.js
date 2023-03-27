import { getRandomNumber } from '../utilits.js';
import { phrases } from '../repeatingText.js';

const isEven = (num) => num % 2 === 0;

const round = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? phrases.YES : phrases.NO;
  return [question, correctAnswer];
};

export default round;
