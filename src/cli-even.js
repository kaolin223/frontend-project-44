import readlineSync from 'readline-sync';

const gameEven = (gameRules, gameQustion) => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
  console.log(gameRules);

  for (let i = 0; i < 3; i += 1) {
    const [question, answer] = gameQustion();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (String(answer) !== String(playerAnswer)) {
      return console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again ${nameUser}!`);
    } 
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${nameUser}!`);
};

export default gameEven