#!/usr/bin/env node
import readlineSync from 'readline-sync';
import name from '../src/cli.js';

console.log(`Hello, ${name}!\nAnswer "yes" if the number is even, otherwise answer "no".`);

function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

function isEven(n) {
  return !(n % 2) ? 'yes' : 'no';
}

for (let i = 0; i < 3; i += 1) {
  const randomNumber = getRandomNumber();
  const isEvenNumber = isEven(randomNumber);
  console.log(randomNumber);

  const userEvenAnswer = readlineSync.question('Your answer: ');

  if (userEvenAnswer === isEvenNumber) {
    console.log('Correct!');
  } else {
    console.log(`'${userEvenAnswer}' is wrong answer ;(. Correct answer was '${isEvenNumber}'.\nLet's try again, ${name}!`);
    process.exit();
  }
}

console.log(`Congratulations, ${name}!`);
