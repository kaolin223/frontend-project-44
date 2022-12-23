#!/usr/bin/env node
import logicGame from '../src/index.js';
import primeRound from '../src/games/prime.js';
import { phrases } from '../src/repeatingText.js';

const primeGame = () => logicGame(phrases.DESCRIPTION_PRIME_GAME, primeRound);

primeGame();
