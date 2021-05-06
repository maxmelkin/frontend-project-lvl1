#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { getRandomNum, getRandomExpr, getRandomRes } from '../src/index.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');

function game() {
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const expr = getRandomExpr();

  const correctAnswer = String(getRandomRes(num1, num2, expr));
  const userAnswer = readlineSync.question(`Question: ${num1} ${expr} ${num2}\nYour answer: `);

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  return false;
}

export default game;
