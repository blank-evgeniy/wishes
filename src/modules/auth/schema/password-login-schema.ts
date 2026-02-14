import z from "zod";

export const passwordLoginSchema = z.object({
  email: z.email({ message: "Введите корректный email" }),
  password: z.string().min(1, { message: "Введите пароль" }),
});

export type PasswordLoginSchema = z.infer<typeof passwordLoginSchema>;
