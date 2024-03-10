import { Iplayer, datos } from "../../domain/entities/types"
import { IplayerRepository } from "../../domain/intefaces/playerRepository"
import { Prisma, PrismaClient } from "@prisma/client"

//Aqui van las persistencias/consultas posibles de cada metodo
const prisma = new PrismaClient()

export class PlayerRepository implements IplayerRepository {
  async checkPlayer(name: string) {
    return await prisma.players.findFirst({
      where: { name: name, NOT: { name: "ANONIMO" } },
    })
  }
  async createPlayer(name: string): Promise<Iplayer> {
    const createPLayer = await prisma.players.create({
      data: {
        name: name || "ANONIMO",
        createdAt: Date(),
      },
    })
    return createPLayer
  }
  async putPlayerName(data: datos) {
    const id = await prisma.players.update({
      where: { id: data.id },
      data: { name: data.new_name },
    })
    return
  }
  async getPlayersList() {
    const result = await prisma.players.findMany()
    return result
  }
}
