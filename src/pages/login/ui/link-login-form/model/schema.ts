import z from "zod";

export const loginByLinkSchema = z.object({
  email: z.email({ message: "Введите корректный email" }),
});

export type LoginByLinkSchema = z.infer<typeof loginByLinkSchema>;
