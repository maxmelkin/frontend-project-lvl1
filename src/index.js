#!/usr/bin/env node

import name from './cli.js';

console.log(`Hello, ${name}!`);

function getRandomNum(min = 0, max = 100) {
  const minAdj = Math.ceil(min);
  const maxAdj = Math.floor(max);
  return Math.floor(Math.random() * (maxAdj - minAdj) + minAdj);
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
    if (!(num1 % d9r) && !(num2 % d9r)) {
      res = d9r;
      break;
    }
  }

  return res;
}

function getP9n() {
  const firstNum = getRandomNum(0, 50);
  const diff = getRandomNum(1, 10);
  const p9nSize = getRandomNum(5, 15);
  const p9n = [firstNum];

  for (let i = 1; i < p9nSize; i += 1) {
    p9n.push(p9n[i - 1] + diff);
  }

  function obfuscate(arr) {
    const arrObfuscated = arr;
    const indObfuscated = getRandomNum(0, p9nSize);
    const elemObfuscated = arrObfuscated[indObfuscated];
    arrObfuscated[indObfuscated] = '..';
    return [arrObfuscated.join(' '), elemObfuscated];
  }

  return obfuscate(p9n);
}

function workflow(correct) {
  for (let i = 0; i < 3; i += 1) {
    if (!correct()) {
      console.log(`Let's try again, ${name}!`);
      process.exit();
    }
  }
  console.log(`Congratulations, ${name}!`);
}

export {
  getRandomNum, getRandomExpr, getRandomRes, getGcd, getP9n, isEven, workflow,
};
