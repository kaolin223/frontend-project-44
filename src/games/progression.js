import { getRandomNumber } from '../index.js';

const progressedRound = () => {
  const start = getRandomNumber(1, 100);
  const step = getRandomNumber(1, 5);
  const progresion = [];
  for (let i = 0; i < step * 10; i += step) {
    progresion.push(start + i);
  }
  const hiddenNumber = getRandomNumber(1, 9);
  const changeProgression = progresion;
  const correctAnswer = changeProgression[hiddenNumber];
  changeProgression[hiddenNumber] = '..';
  const question = progresion.join(' ').toString();
  return [question, correctAnswer.toString()];
};

export default progressedRound;
