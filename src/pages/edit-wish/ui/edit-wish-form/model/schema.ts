import z from "zod";

import { urlSchema } from "@/shared/validation/schema";

export const editWishSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Введите название" })
    .max(30, { message: "Не более 30 символов" }),
  price: z.string().optional(),
  url: urlSchema("Введите корректную ссылку"),
  image_url: urlSchema("Введите корректную ссылку"),
  note: z.string().max(300, { message: "Не более 300 символов" }).optional(),
});

export type EditWishSchema = z.infer<typeof editWishSchema>;
