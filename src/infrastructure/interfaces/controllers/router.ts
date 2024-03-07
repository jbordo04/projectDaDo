import express from 'express';
import playerController from './playerControllers';
import gamesController from './gamesControllers';
import rankingController from './rankingControllers';

export const routerDado = express.Router();

// Rutes per a players
routerDado.post('/players', playerController.createPlayer);
routerDado.put('/players/:id', playerController.putPlayerName);
routerDado.get('/players', playerController.getPlayersList);

// Rutes per a games
routerDado.post('/games/:id', gamesController.newRollDice);
routerDado.delete('/games/:id', gamesController.deleteRollDice);
routerDado.get('/games/:id', gamesController.getRollDiceList);

// Rutes per a ranking
routerDado.get('/ranking', rankingController.getAllRanking);
routerDado.get('/ranking/loser', rankingController.getLosersRanking);
routerDado.get('/ranking/winner', rankingController.getWinnersRanking);
