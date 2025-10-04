import z from "zod";

export const CreateCardDTO = z.object({
  name: z.string(),
  description: z.string(),
  price: z.preprocess(Number, z.number().positive()),
  image: z.instanceof(File),
});

export type CreateCardDTOType = z.infer<typeof CreateCardDTO>;
