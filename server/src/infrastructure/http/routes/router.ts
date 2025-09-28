import type { Hono } from "hono";

export default async function Router(app: Hono) {
  app.get("/", (c) => {
    return c.json({ message: "Hello World!" });
  });
}
