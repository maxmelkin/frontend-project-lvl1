#!/usr/bin/env node

import name from './cli.js';

console.log(`Hello, ${name}!`);

function getRandomNum() {
  return Math.floor(Math.random() * 100);
}

function getRandomExpr() {
  const exprArr = ['+', '-', '*'];
  return exprArr[Math.floor(Math.random() * exprArr.length)];
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

function isEven(n) {
  return !(n % 2) ? 'yes' : 'no';
}

function getGcd(num1, num2) {
  let res = 0;
  for (let d9r = num1; d9r > 0; d9r -= 1) {
    if (!(num1 % d9r)) {
      if (!(num2 % d9r)) {
        res = d9r;
        break;
      }
    }
  }
  return res;
}

function workflow(result) {
  for (let i = 0; i < 3; i += 1) {
    if (!result()) {
      console.log(`Let's try again, ${name}!`);
      process.exit();
    }
  }
  console.log(`Congratulations, ${name}!`);
}

export {
  getRandomNum, getRandomExpr, getRandomRes, isEven, getGcd, workflow,
};
