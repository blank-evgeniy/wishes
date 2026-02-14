import z from "zod";

export const wishlistSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Введите название" })
    .max(30, { message: "Не более 30 символов" }),
});

export type WishlistSchema = z.infer<typeof wishlistSchema>;
