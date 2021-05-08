import readlineSync from 'readline-sync';
import { getRandomNum, getRandomExpr, getResult } from '../src/index.js';

function gameBrainCalc() {
  console.log('What is the result of the expression?');

  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const expr = getRandomExpr();

  const correctAnswer = getResult(num1, num2, expr);
  const userAnswer = readlineSync.question(`Question: ${num1} ${expr} ${num2}\nYour answer: `);

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  return false;
}

export default gameBrainCalc;
