import readlineSync from 'readline-sync';
import { getP9n } from '../src/index.js';

function gameBrainP9n() {
  console.log('What number is missing in the progression?');

  const p9n = getP9n();

  const correctAnswer = p9n[1];
  const userAnswer = readlineSync.question(`Question: ${p9n[0]}\nYour answer: `);

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  return false;
}

export default gameBrainP9n;
