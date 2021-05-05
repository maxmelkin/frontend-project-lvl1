#!/usr/bin/env node

import name from './cli.js';

console.log(`Hello, ${name}!`);

function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

function workflow(result) {
  for (let i = 0; i < 3; i += 1) {
    if (!result()) {
      process.exit();
    }
  }
  console.log(`Congratulations, ${name}!`);
}

export { workflow, getRandomNumber };
