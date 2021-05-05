#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getRandomNumber from '../src/index.js';

const term = 'Answer "yes" if the number is even, otherwise answer "no".';

function isEven(n) {
  return !(n % 2) ? 'yes' : 'no';
}

function result() {
  const randomNumber = getRandomNumber();
  const isEvenNumber = isEven(randomNumber);
  const userAnswer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);

  if (userAnswer === isEvenNumber) {
    return true;
  }
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${isEvenNumber}".`);
  return false;
}

export { term, result };
