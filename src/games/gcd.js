import { getRandomNumber } from '../utilits.js';

const gcd = (num1, num2) => (!num2 ? num1 : gcd(num2, num1 % num2));

const gcdRound = () => {
  const firstOperand = getRandomNumber(1, 100);
  const secondOperand = getRandomNumber(1, 100);
  const question = `${firstOperand} ${secondOperand}`;
  const correctAnswer = `${gcd(firstOperand, secondOperand)}`;
  return [question, correctAnswer.toString()];
};

export default gcdRound;
