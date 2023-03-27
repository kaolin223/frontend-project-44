#!/usr/bin/env node
import logicGame from '../src/index.js';
import progressedRound from '../src/games/progression.js';
import { phrases } from '../src/repeatingText.js';

const progressionGame = () => logicGame(phrases.DESCRIPTION_PROGRESSED_GAME, progressedRound);

progressionGame();
