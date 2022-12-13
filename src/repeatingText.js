export const phrases = {
    GREETING: 'Welcome to the Brain Games!',
    ASK_NAME: 'May I have your name? ',
    ANSWER: 'Your answer: ',
    CORRECT_ANSWER: 'Correct!',
    YES: 'yes',
    NO: 'no',
    DESCRIPTION_EVEN_GAME: 'Answer "yes" if number is even, otherwise answer "no".',
    DESCRIPTION_CALC_GAME: 'What is the result of the expression?',
    DESCRIPTION_GCD_GAME: 'Find the greatest common divisor of given numbers.'
};

export const greetings = (nameUser) => `Hello, ${nameUser}!`;
export const matter = (question) => `Question: ${question}`;
export const wrongAnswer = (userAnswer, correctAnswer, nameUser) => `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${nameUser}!`;
export const congratulation = (nameUser) => `Congratulations ${nameUser}!`;
