import z from "zod";

export const linkLoginSchema = z.object({
  email: z.email({ message: "Введите корректный email" }),
});

export type LinkLoginSchema = z.infer<typeof linkLoginSchema>;
