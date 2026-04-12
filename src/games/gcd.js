import runGame from '../engine/index.js';

const getRandomInt = (min = 1, max = 100) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

// Алгоритм Евклида для нахождения НОД
const gcd = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const generateRound = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);

  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcd(num1, num2));

  return { question, correctAnswer };
};

const description = 'Find the greatest common divisor of given numbers.';

const playGcdGame = () => runGame(description, generateRound);

export default playGcdGame;