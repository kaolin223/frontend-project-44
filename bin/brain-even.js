#!/usr/bin/env node
import logicGame from '../src/index.js';
import round from '../src/games/even.js';
import { phrases } from '../src/repeatingText.js';

const evenGame = () => logicGame(phrases.DESCRIPTION_EVEN_GAME, round);

evenGame();
