#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { getRandomNum } from '../src/index.js';

console.log('Find the greatest common divisor of given numbers.');

function getGcd(num1, num2) {
  let res = 0;
  for (let d9r = num1; d9r >= 0; d9r -= 1) {
    if (!(num1 % d9r)) {
      if (!(num2 % d9r)) {
        res = d9r;
        break;
      }
    }
  }
  return res;
}

function game() {
  const num1 = getRandomNum();
  const num2 = getRandomNum();

  const correctAnswer = String(getGcd(num1, num2));
  const userAnswer = readlineSync.question(`Question: ${num1} ${num2}\nYour answer: `);

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  return false;
}

export default game;
