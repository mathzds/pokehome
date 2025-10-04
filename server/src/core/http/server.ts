import { Hono } from "hono";
import { cors } from "hono/cors";
import Router from "./router/router";
import { ensureBucket } from "../../infra/minio/minio";

const app = new Hono();
app.use(
  "*",
  cors({
    origin: "http://localhost:5173",
    allowMethods: ["GET", "POST", "OPTIONS", "DELETE", "PATCH", "PUT"],
    allowHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
Router(app);

ensureBucket();

export default app;
