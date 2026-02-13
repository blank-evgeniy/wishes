import z from "zod";

export const loginByPasswordSchema = z.object({
  email: z.email({ message: "Введите корректный email" }),
  password: z.string().min(1, { message: "Введите пароль" }),
});

export type LoginByPasswordSchema = z.infer<typeof loginByPasswordSchema>;
