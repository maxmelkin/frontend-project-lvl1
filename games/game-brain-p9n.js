// import readlineSync from 'readline-sync';
import { getP9n } from '../src/index.js';

console.log('What number is missing in the progression?');

function game() {
  const p9n = getP9n();
  return p9n;
}

export default game;
