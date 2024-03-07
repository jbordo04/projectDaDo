import "dotenv/config";
import express from "express";
import { json, urlencoded } from "body-parser";
// import cors from "cors";
import { routerDado } from "./infrastructure/router";
export const PORT = Number(process.env.PORT) || 5000;
import http from "http";

export class Server {
  private server: http.Server | null;
  readonly port: number;
  readonly express: express.Application;
  constructor(port: number) {
    this.port = port;
    this.server = null;
    this.express = express();
    // this.express.use(cors());
    this.express.use(urlencoded({ extended: true }));
    this.express.use(json());
    this.express.use("/api", routerDado);
  }

  async start() {
    await new Promise<void>((resolve, reject) => {
      try {
        this.server = this.express.listen(this.port, async () => {
          console.log(
            `[APP] - Server is running on: http://localhost:${this.port}/api`
          );
          resolve();
        });
      } catch (err) {
        reject(err);
      }
    });
  }
  async stop() {
    await new Promise<void>((resolve) => {
      if (this.server) {
        this.server.close(() => {
          console.log(`[APP] - Server is closed`);
          resolve();
        });
      } else {
        console.log(`[APP] - No Server to close`);
        resolve();
      }
    });
  }
}

const app = new Server(PORT);
app.start();
