import { Hono } from "hono";
import UserController from "../controllers/user";
import { Scalar } from "@scalar/hono-api-reference";

const Router = (app: Hono) => {
  app.get("/live", (c) => c.text("Living"));
  app.get(
    "/scalar",
    Scalar({
      url: "/openapi.json",
      theme: "alternate",
    }),
  );

  UserController(app);
};

export default Router;
