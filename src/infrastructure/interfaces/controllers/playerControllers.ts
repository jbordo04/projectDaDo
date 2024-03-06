import { Request, Response } from 'express';

import { Player } from 
import { PlayerRepositoryImpl} from

import { CreatePlayerUsecase } from 
import { PutPlayerUsecase } from 
import { GetPlayerUsecase } from '../../../application';

const playerRepository = new PlayerRepositoryImpl();

const createPlayerUsecase = new CreatePlayerUsecase(playerRepository);
const putPlayerUsecase = new PutPlayerUsecase(playerRepository);
const getPlayerUsecase = new GetPlayerUsecase(playerRepository);

export const playerController = {
    createPlayer: (req: Request, res: Response) => {
        const { name } = req.body;

        // Verifica si el nom ja existeix
        if (name) {
            const existingPlayer = getPlayerUsecase.executeByName(name);
            if (existingPlayer) {
                return res.status(400).json({ error: "Aquest nom de jugador ja està registrat" });
            }
        }

        // Si no es proporciona cap nom, es defineix com a "ANÒNIM"
        const playerName = name || "ANÒNIM";

        const newPlayer = new Player(playerName);

        try {
            // Genera un identificador únic per al jugador
            newPlayer.id = generateUniqueId(); // Implementa la generació d'identificadors únics

            // Registra la data de registre del jugador
            newPlayer.registrationDate = new Date();

            const createdPlayer = createPlayerUsecase.execute(newPlayer);
            res.status(201).json(createdPlayer);
        } catch (error) {
            res.status(500).json({ error: "Error en la creació del jugador" });
        }
    },
};
