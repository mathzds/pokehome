import { Hono } from "hono";
import { CreateUserDTO } from "../../../domain/dto/user/create";
import UserService from "../../../domain/services/user";
import { Scalar } from "@scalar/hono-api-reference";
import { LoginUserDTO } from "../../../domain/dto/user/login";
import { getCookie, setCookie } from "hono/cookie";

const UserController = (app: Hono) => {
  const service = new UserService();

  app.post("/user", async (c) => {
    try {
      const body = await c.req.json();
      const parse = CreateUserDTO.parse(body);

      if (parse) {
        console.log({
          body: body,
          validated: parse,
        });

        const user = await service.create(parse);
        return c.json({ user: user, message: "Created" }, 201);
      }
    } catch (error) {
      if (error instanceof Error) {
        return c.json({ error: error }, 400);
      }

      return c.json({ error: error }, 400);
    }
  });

  app.post("/user/login", async (c) => {
    try {
      const body = await c.req.json();
      const parse = LoginUserDTO.parse(body);

      if (parse) {
        await service.login(parse).then((cookie) => {
          setCookie(c, "jwt", cookie);
        });

        return c.json({ message: "Logged" }, 200);
      }
    } catch (error) {
      if (error instanceof Error) {
        return c.json({ error: error }, 400);
      }

      return c.json({ error: error }, 400);
    }
  });

  app.get("/user/me", async (c) => {
    try {
      const cookie = getCookie(c, "jwt");

      if (cookie) {
        const user = await service.me(cookie);
        return c.json({ me: user });
      }
      return c.json({ message: "No provide cookie" });
    } catch (error) {
      if (error instanceof Error) {
        return c.json({ error: error }, 400);
      }

      return c.json({ error: error }, 400);
    }
  });
};

export default UserController;
