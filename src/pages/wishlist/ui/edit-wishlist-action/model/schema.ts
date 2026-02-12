import z from "zod";

export const updateWishlistSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Введите название" })
    .max(30, { message: "Не более 30 символов" }),
});

export type UpdateWishlistSchema = z.infer<typeof updateWishlistSchema>;
