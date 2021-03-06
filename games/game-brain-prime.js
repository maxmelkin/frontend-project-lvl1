import readlineSync from 'readline-sync';
import { getRandomNum, isPrime } from '../src/index.js';

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

function gameBrainPrime() {
  const num = getRandomNum();

  const correctAnswer = isPrime(num);
  const userAnswer = readlineSync.question(`Question: ${num}\nYour answer: `);

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  return false;
}

export default gameBrainPrime;
