import z from "zod";

export const profileSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Введите имя" })
    .max(30, { message: "Не более 30 символов" }),
  description: z
    .string()
    .max(300, { message: "Не более 300 символов" })
    .optional(),
  birthDate: z.date().optional(),
});

export type ProfileSchema = z.infer<typeof profileSchema>;
