import { Request, Response } from 'express';

import { Player } from 
import { PlayerRepositoryImpl} from

import { CreatePlayerUsecase } from 
import { PutPlayerUsecase } from 
import { GetPlayerUsecase } from '../../application/';

const playerRepository = new PlayerRepositoryImpl();

const createPlayerUsecase = new CreatePlayerUsecase(playerRepository);
const putPlayerUsecase = new PutPlayerUsecase(playerRepository);
const getPlayerUsecase = new GetPlayerUsecase(playerRepository);

// Defineix el controlador com un objecte
export const playerController = {
    // Endpoint POST per crear un nou jugador
    createPlayer: (req: Request, res: Response) => {
        const {id, name} = req.body;
        const newPlayer = new Player(name);
        const createdPlayer = createPlayerUsecase.execute(newPlayer);
        res.status(201).json(createdPlayer);
    },

    // Endpoint GET per obtenir la llista dels jugadors amb més percentatge d'èxit
    getPlayersList: (req: Request, res: Response) => {
        const playersList = getPlayerUsecase.executeGetAll();
        res.status(200).json(playersList);
    },

    // Endpoint PUT per modificar el nom d'un jugador
    putPlayerName: (req: Request, res: Response) => {
        const playerId: string = req.params.id;
        const updatedPlayerName: Player = req.body;
        const updatedPlayerNameResult = putPlayerUsecase.execute(playerId, updatedPlayerName);
        res.status(200).json({
            message: "Name changed successfully",
            updatedPlayerNameResult: updatedPlayerNameResult
        });
    },    
};

export default playerController;