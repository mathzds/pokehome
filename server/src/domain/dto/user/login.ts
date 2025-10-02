import z from "zod";

export const LoginUserDTO = z.object({
  email: z.email(),
  password: z.string().min(3),
});

export type LoginUserDTOType = z.infer<typeof LoginUserDTO>;
