import { serve } from "@hono/node-server";
import { ServerConfig } from "./infra/config/server";
import app from "./core/http/server";
import AppDataSource from "./infra/database/connector";

AppDataSource.initialize().then(() => console.log("Database connnected"));

serve(
  {
    fetch: app.fetch,
    port: ServerConfig.port,
  },
  (server) => {
    console.log(`Server is running on http://localhost:${server.port}`);
  },
);
