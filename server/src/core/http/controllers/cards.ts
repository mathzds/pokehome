import { Hono } from "hono";
import CardService from "../../../domain/services/card";
import MinioService from "../../../domain/services/minio";

const CardsController = (app: Hono) => {
  const minioService = new MinioService();
  const service = new CardService(minioService);

  app.post("/cards", async (c) => {
    try {
      const formData = await c.req.formData();

      const name = formData.get("name")?.toString();
      const description = formData.get("description")?.toString();
      const price = Number(formData.get("price"));
      const image = formData.get("image") as File | null;

      if (!name || !description || !price || !image) {
        return c.json({ error: "Dados inválidos" }, 400);
      }

      const card = await service.create({
        name,
        description,
        price,
        image,
      });

      return c.json({ card }, 201);
    } catch (error) {
      if (error instanceof Error) {
        return c.json({ error: error.message }, 400);
      }

      return c.json({ error: String(error) }, 400);
    }
  });
};

export default CardsController;
