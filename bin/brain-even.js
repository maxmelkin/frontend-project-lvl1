#!/usr/bin/env node

import workflow from '../src/index.js';
import { term, userAnswer } from '../games/game-brain-even.js';

workflow(term, userAnswer);
