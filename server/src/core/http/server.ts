import { Hono } from "hono";
import Router from "./router/router";

const app = new Hono();

Router(app);

export default app;
