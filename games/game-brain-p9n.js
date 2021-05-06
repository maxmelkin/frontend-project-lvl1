import readlineSync from 'readline-sync';
import { getRandomNum, getP9n } from '../src/index.js';

console.log('Find the greatest common divisor of given numbers.');

function game() {
  const num1 = getRandomNum();
  const num2 = getRandomNum();

  const correctAnswer = String(getP9n(num1, num2));
  const userAnswer = readlineSync.question(`Question: ${num1} ${num2}\nYour answer: `);

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  return false;
}

export default game;
