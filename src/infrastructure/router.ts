import express from 'express';
import playerController from './playerControllers';
import gamesController from './gamesControllers';
import rankingController from './rankingControllers';

export const routerDado = express.Router();

routerDado.post('/', playerController.createPlayer);
routerDado.put('/:id', playerController.putPlayerName);
routerDado.get('/', playerController.getPlayersList);

routerDado.post('/:id', gamesController.NewRollDice);
routerDado.delete('/:id', gamesController.deleteRollDice);
routerDado.get('/:id', gamesController.getRollDiceList);

routerDado.get('/', rankingController.getAllRanking);
routerDado.get('/', rankingController.getLosersRanking);
routerDado.get('/', rankingController.getWinnersRanking);
