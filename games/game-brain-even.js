#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { getRandomNum, isEven } from '../src/index.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');

function game() {
  const randomNum = getRandomNum();
  const isEvenNum = isEven(randomNum);
  const userAnswer = readlineSync.question(`Question: ${randomNum}\nYour answer: `);

  if (userAnswer === isEvenNum) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${isEvenNum}".`);
  return false;
}

export default game;
