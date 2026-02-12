import z from "zod";

export const urlSchema = (message: string) =>
  z
    .string()
    .trim()
    .optional()
    .transform((val) => (val === "" ? undefined : val))
    .refine((val) => !val || z.url().safeParse(val).success, {
      message,
    });
