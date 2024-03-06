import { Request, Response } from 'express';
import { RollDice } from './RollDice'; // Ruta per a RollDice
import { RollDiceRepositoryImpl } from './RollDiceRepositoryImpl'; // Ruta per a RollDiceRepositoryImpl
import { CreateRollDiceUsecase } from './CreateRollDiceUsecase'; // Ruta per a CreateRollDiceUsecase
import { DeleteRollDiceUsecase } from './DeleteRollDiceUsecase'; // Ruta per a DeleteRollDiceUsecase
import { GetRollDiceListUsecase } from './GetRollDiceListUsecase'; // Ruta per a GetRollDiceListUsecase

const rollDiceRepository = new RollDiceRepositoryImpl();

const createRollDiceUsecase = new CreateRollDiceUsecase(rollDiceRepository);
const deleteRollDiceUsecase = new DeleteRollDiceUsecase(rollDiceRepository);
const getRollDiceUsecase = new GetRollDiceListUsecase(rollDiceRepository);

export const gamesController = {
    newRollDice: (req: Request, res: Response) => {
        const newRollDice = new RollDice();
        const createdRollDice = createRollDiceUsecase.execute(newRollDice);
        res.status(201).json(createdRollDice);
    },

    getRollDiceList: (req: Request, res: Response) => {
        const rollDiceList = getRollDiceUsecase.executeGetAll();
        res.status(200).json(rollDiceList);
    },

    deleteRollDice: async (req: Request, res: Response) => { 
        const rollDiceId: string = req.params.id;
        try {
            await deleteRollDiceUsecase.execute(rollDiceId); // Esperar l'execució i gestionar errors
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
};

export default gamesController;














Per poder realitzar una tirada, un usuari/ària s’ha de registrar amb un nom no repetit. Al ser creat, se li assigna un identificador únic i una data de registre.

Si l’usuari/ària ho desitja, pot no afegir cap nom i es dirà “ANÒNIM”. Pot haver-hi més d’un jugador/a “ANÒNIM”.