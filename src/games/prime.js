import { getRandomNumber } from '../index.js';
import { phrases } from '../repeatingText.js';

const prime = (num) => {
  for (let i = 2, max = Math.sqrt(num); i <= max; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};
  const primeRound = () => {
  const number = getRandomNumber(1, 100);
  const correctAnswer = prime(number) ? phrases.YES : phrases.NO;
  const question = number;
  return [question, correctAnswer]; 
};

export default primeRound;
