import readlineSync from 'readline-sync';
import { greetUser } from '../cli.js';

const isEven = (num) => num % 2 === 0;

const playEvenGame = () => {
  const name = greetUser();   // используем уже существующую функцию приветствия

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswers = 0;
  const roundsToWin = 3;

  while (correctAnswers < roundsToWin) {
    const number = Math.floor(Math.random() * 100) + 1; // случайное число от 1 до 100
    console.log(`Question: ${number}`);

    const userAnswer = readlineSync.question('Your answer: ').trim().toLowerCase();

    const correctAnswer = isEven(number) ? 'yes' : 'no';

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return; // завершаем игру при ошибке
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export { playEvenGame };