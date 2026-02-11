import z from "zod";

export const createWishlistSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Введите название" })
    .max(30, { message: "Не более 30 символов" }),
});

export type CreateWishlistSchema = z.infer<typeof createWishlistSchema>;
