import express from 'express';

export const routerDado = express.Router();

routerDado.post('/', playerController.createPlayer);
routerDado.put('/:id', playerController.changeName);
routerDado.get('/', playerController.getPlayersList);

routerDado.post('/:id', gamesController.NewRollDice);
routerDado.delete('/:id', gamesController.deleteRollDice);
routerDado.get('/:id', gamesController.getRollDiceList);

routerDado.get('/', rankingController.getAllRanking);
routerDado.get('/', rankingController.getLosersRanking);
routerDado.get('/', rankingController.getWinnersRanking);
