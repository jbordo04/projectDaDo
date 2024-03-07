import { Game, RollDice } from '../../domain/entities/game';
import { RollDiceRepository } from "../../domain/usecases/rollDiceRepository"
export class RollDiceRepositoryImpl implements RollDiceRepository {
    private rollDice: [] = [];
}

    createRollDice(rollDice: []) {
        this.rollDice.push(rollDice); 
    }

  

    // Mètode per eliminar una task
    deleteTask(id: string): void {
        const taskIndex = this.findIndexById(id); // Cerquem l'índex de la task amb l'ID proporcionada
        if (taskIndex !== -1) { // Si s'ha trobat la task
            this.tasks.splice(taskIndex, 1); // l'eliminem de l'array
        } else {
            throw new Error(`Task with id ${id} not found`); 
        }
    }

   

    // Mètode per obtenir una task segons la seva ID
    getTaskById(id: string): Task | undefined {
        return this.tasks.find(task => task.id === id); // Retorna la task amb l'ID proporcionada, si s'ha trobat
    }
    }

    // Mètode per obtenir totes les tasques
    listTask(): Task[] {
        return this.tasks; 
    }
}