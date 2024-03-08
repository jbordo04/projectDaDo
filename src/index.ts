import { Server, PORT } from "./infrastructure/server/server"

const app = new Server(PORT)
app.start()
