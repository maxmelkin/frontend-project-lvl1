#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { getRandomNum } from '../src/index.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');

function getRandomExpr() {
  const exprArr = ['+', '-', '*'];
  return exprArr[Math.floor(Math.random * exprArr.length)];
}

function getRandomRes(num1, num2, expr) {
  let res = 0;
  switch (expr) {
    case '-':
      res = num1 - num2;
      break;
    case '*':
      res = num1 * num2;
      break;
    default:
      res = num1 + num2;
  }
  return res;
}

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
