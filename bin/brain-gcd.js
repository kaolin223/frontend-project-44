#!/usr/bin/env node
import logicGame from '../src/index.js';
import gcdRound from '../src/games/gcd.js';
import { phrases } from '../src/repeatingText.js';

const gcdGame = () => logicGame(phrases.DESCRIPTION_GCD_GAME, gcdRound);

gcdGame();