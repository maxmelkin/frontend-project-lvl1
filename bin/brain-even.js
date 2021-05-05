#!/usr/bin/env node

import { workflow } from '../src/index.js';
import { term, result } from '../games/game-brain-even.js';

workflow(term, result);
