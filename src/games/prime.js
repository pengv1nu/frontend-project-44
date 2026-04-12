import runGame from '../engine/index.js';

const getRandomInt = (min = 1, max = 100) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

// Предикат: проверка, является ли число простым
const isPrime = (num) => {
  if (num < 2) return false;
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const number = getRandomInt(2, 100);     // числа от 2 до 100

  const question = String(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return { question, correctAnswer };
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const playPrimeGame = () => runGame(description, generateRound);

export default playPrimeGame;