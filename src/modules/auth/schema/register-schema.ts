import z from "zod";

export const registerSchema = z
  .object({
    email: z.email({ message: "Введите корректный email" }),
    password: z
      .string()
      .min(1, { message: "Введите пароль" })
      .max(30, { message: "Не более 30 символов" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Пароль должен содержать не менее 6 символов" })
      .max(30, { message: "Не более 30 символов" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Пароли не совпадают",
  });

export type RegisterSchema = z.infer<typeof registerSchema>;
