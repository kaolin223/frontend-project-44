#!/usr/bin/env node
import logicGame from '../src/index.js';
import calcRound from '../src/games/calc.js';
import { phrases } from '../src/repeatingText.js';

const calcGame = () => logicGame(phrases.DESCRIPTION_CALC_GAME, calcRound);

calcGame();
