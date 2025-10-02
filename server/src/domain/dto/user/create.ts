import z from "zod";

export const CreateUserDTO = z.object({
  username: z.string().min(3),
  email: z.email(),
  password: z.string().min(3),
});

export type CreateUserDTOType = z.infer<typeof CreateUserDTO>;
