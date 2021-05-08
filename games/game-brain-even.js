import readlineSync from 'readline-sync';
import { getRandomNum, isEven } from '../src/index.js';

function gameBrainEven() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const num = getRandomNum();

  const correctAnswer = isEven(num);
  const userAnswer = readlineSync.question(`Question: ${num}\nYour answer: `);

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  return false;
}

export default gameBrainEven;
