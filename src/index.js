#!/usr/bin/env node
// import readlineSync from 'readline-sync';
import name from './cli.js';

function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

function workflow(term, result) {
  console.log(`Hello, ${name}!\n${term}`);

  for (let i = 0; i < 3; i += 1) {
    if (result) {
      console.log('Correct!');
    } else {
      process.exit();
    }
  }
  console.log(`Congratulations, ${name}!`);
}

export { workflow, getRandomNumber };
