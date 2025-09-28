import { serve } from "@hono/node-server";
import { Hono } from "hono";
import Database from "../database/connector.js";
import ClientConfig from "./config/client.js";
import Router from "./routes/router.js";

export default class Server {
  private static _instance: Server;
  private readonly _honoApp: Hono;

  private constructor() {
    this._honoApp = new Hono();
  }

  public static getInstance(): Server {
    if (!Server._instance) {
      Server._instance = new Server();
    }
    return Server._instance;
  }

  public get app(): Hono {
    return this._honoApp;
  }

  public async listen(): Promise<void> {
    await new Database().connect();

    Router(this._honoApp);

    serve(
      {
        fetch: this._honoApp.fetch,
        port: ClientConfig.port,
      },
      (info) => {
        console.log(`Server is running on http://localhost:${info.port}`);
      }
    );
  }
}
