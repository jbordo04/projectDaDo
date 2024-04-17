import supertest from "supertest"
import jwt from "jsonwebtoken"
import { Server } from "../infrastructure/server/server"
import { PrismaClient } from "../../prisma/generated/client"

const server = new Server(4050)
const app = server.express
const prisma = new PrismaClient()
const secretKey = process.env.SECRET || "secret"
const api = supertest(app)

describe("Pruebas para el endpoint POST /players", () => {
  // Limpiar entidades despues de todas las pruebas

  afterAll(async () => {
    try {
      await prisma.roll.deleteMany()
      await prisma.player.deleteMany()
    } catch (error) {
      console.error("Error al limpiar las entidades:", error)
    } finally {
      await prisma.$disconnect()
    }
  })

  it("Deberia crear un nuevo jugador", async () => {
    // Crear nuevo jugador
    const response = await api
      .post("/api/players")
      .send({ name: "NuevoJugador" })
    console.log(response.status)
    expect(response.statusCode).toBe(201)
    expect(response.body.player.name).toBe("NuevoJugador")
  })

  it("Deberia devolver el error en el caso que ya exista el jugador", async () => {
    await prisma.player.create({
      data: {
        name: "NuevoJugador2",
      },
    })

    const response = await api
      .post("/api/players")
      .send({ name: "NuevoJugador2" })

    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual({
      error: "Ya existe un jugador con este nombre!",
    })
  })
})

describe("Pruebas para el endpoint POST /players/:id", () => {
  afterAll(async () => {
    try {
      await prisma.roll.deleteMany()
      await prisma.player.deleteMany()
    } catch (error) {
      console.error("Error al limpiar las entidades:", error)
    } finally {
      await prisma.$disconnect()
    }
  })

  it("Deberia dar error de token no proporcionado", async () => {
    // Crear nuevo jugador
    const createdPlayer = await prisma.player.create({
      data: {
        name: "JugadorOriginal",
      },
    })

    const response = await api
      .put(`/api/players/${createdPlayer.id}`)
      .send({ name: "NuevoNombre" })

    expect(response.statusCode).toBe(401)
    expect(response.body).toEqual({ error: "Token no proporcionado" })
  })

  it("Deberia cambiar el nombre del jugador", async () => {
    // Crear un nuevo jugador
    const createdPlayer = await prisma.player.create({
      data: {
        name: "NuevoJugador3",
      },
    })

    const token = jwt.sign(
      {
        id: createdPlayer.id,
        name: createdPlayer.name,
      },
      secretKey,
      { expiresIn: "3m" }
    )

    const response = await api
      .put(`/api/players/${createdPlayer.id}`)
      .set("Authorization", `Bearer ${token}`)
      .send({ name: "NuevoJugador4" })

    expect(response.statusCode).toBe(201)
    expect(response.body.name).toBe("NuevoJugador4")
  })
})

describe("Pruebas para el endpoint GET /players", () => {
  // Limpiar entidades despues de todas las pruebas
  afterAll(async () => {
    try {
      await prisma.roll.deleteMany()
      await prisma.player.deleteMany()
    } catch (error) {
      console.error("Error al limpiar las entidades:", error)
    } finally {
      await prisma.$disconnect()
    }
  })

  it("Deberia obtener todos los jugadores con sus tiradas y porcentaje de exito", async () => {
    const player1 = await prisma.player.create({
      data: {
        name: "Jugador1",
        rolls: {
          create: [
            { dice1: 1, dice2: 6, isWinner: true },
            { dice1: 3, dice2: 4, isWinner: false },
          ],
        },
      },
    })

    const player2 = await prisma.player.create({
      data: {
        name: "Jugador2",
        rolls: {
          create: [
            { dice1: 2, dice2: 3, isWinner: false },
            { dice1: 1, dice2: 6, isWinner: true },
          ],
        },
      },
    })

    const response = await api.get("/api/players")

    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual([
      {
        id: player1.id,
        name: "Jugador1",
        successPercentage: 50,
      },
      {
        id: player2.id,
        name: "Jugador2",
        successPercentage: 50,
      },
    ])
  })
})
