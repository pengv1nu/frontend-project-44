import runGame from '../engine/index.js';

const getRandomInt = (min, max) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = () => {
  const length = getRandomInt(5, 10);        // длина от 5 до 10
  const start = getRandomInt(1, 20);
  const step = getRandomInt(2, 5);           // шаг от 2 до 5

  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }

  // Случайная позиция скрытого элемента
  const hiddenIndex = getRandomInt(0, length - 1);
  const correctAnswer = String(progression[hiddenIndex]);

  // Заменяем скрытое число на ..
  progression[hiddenIndex] = '..';

  const question = progression.join(' ');

  return { question, correctAnswer };
};

const description = 'What number is missing in the progression?';

const playProgressionGame = () => runGame(description, generateProgression);

export default playProgressionGame;