import { getRandomNumber } from '../index.js';

const calcRound = () => {
  const firstOperand = getRandomNumber(1, 99);
  const secondOperand = getRandomNumber(1, 99);
  const operatorIndex = getRandomNumber(0, 2); 
  const operators = ['+', '-', '*'];
  const operator = operators[operatorIndex];
  let correctAnswer = 0; 

  switch (operatorIndex) {
    case 0:
      correctAnswer = firstOperand + secondOperand;
      break;
    case 1:
       correctAnswer = firstOperand - secondOperand;
       break;
    case 2:
       correctAnswer = firstOperand * secondOperand;
       break;
    default:
       correctAnswer = 1;
  }
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  return [question, correctAnswer.toString()];
};

export default calcRound;

