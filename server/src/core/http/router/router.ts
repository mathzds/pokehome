import { Scalar } from "@scalar/hono-api-reference";
import { Hono } from "hono";
import CardsController from "../controllers/cards";
import UserController from "../controllers/user";

const Router = (app: Hono) => {
  app.get("/live", (c) => c.text("Living"));
  app.get(
    "/scalar",
    Scalar({
      url: "/openapi.json",
      theme: "alternate",
    })
  );

  UserController(app);
  CardsController(app);
};

export default Router;
