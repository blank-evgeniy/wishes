"use client";

import { Button } from "@/shared/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/shared/ui/field";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";

import { useQuery } from "@tanstack/react-query";
import { wishlistQueries } from "@/shared/api/wishlists/wishlists-queries";
import { RequiredMark } from "@/shared/ui/required-marl";

import { CreateWishSchema, createWishSchema } from "./model/schema";
import { useCreateWish } from "./api/use-create-wish";
import { useRouter } from "next/navigation";
import { routes } from "@/shared/routes";

interface CreateWishFormProps {
  wishlistId: number;
}

export const CreateWishForm = ({ wishlistId }: CreateWishFormProps) => {
  const router = useRouter();

  const { data: wishlist, isLoading } = useQuery(
    wishlistQueries.wishlistDetails(wishlistId),
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createWishSchema),
  });

  const { mutate, isPending } = useCreateWish(wishlistId);

  const onSubmit = (data: CreateWishSchema) => {
    mutate(
      {
        ...data,
        price: Number(data.price),
      },
      {
        onSuccess: () => {
          router.push(routes.wishlist(wishlistId));
        },
      },
    );
  };

  if (!isLoading && !wishlist) return null;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <FieldSet>
        <FieldLegend>Создание желания</FieldLegend>
        <FieldDescription>
          Введите информацию о желании, чтобы добавить его в список
        </FieldDescription>

        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="title">
              Название
              <RequiredMark />
            </FieldLabel>
            <Input
              id="title"
              autoComplete="off"
              {...register("title")}
              aria-invalid={!!errors.title}
            />
            {errors.title && <FieldError>{errors.title.message}</FieldError>}
          </Field>

          <Field>
            <FieldLabel htmlFor="price">Цена</FieldLabel>
            <Input
              id="price"
              type="number"
              autoComplete="off"
              {...register("price")}
              aria-invalid={!!errors.price}
            />
            {errors.price && <FieldError>{errors.price.message}</FieldError>}
          </Field>

          <Field>
            <FieldLabel htmlFor="url">Ссылка</FieldLabel>
            <Input
              id="url"
              autoComplete="off"
              {...register("url")}
              aria-invalid={!!errors.url}
            />
            {errors.url && <FieldError>{errors.url.message}</FieldError>}
          </Field>

          <Field>
            <FieldLabel htmlFor="url">Ссылка на изображение</FieldLabel>
            <Input
              id="url"
              autoComplete="off"
              {...register("image_url")}
              aria-invalid={!!errors.image_url}
            />
            {errors.image_url && (
              <FieldError>{errors.image_url.message}</FieldError>
            )}
          </Field>

          <Field>
            <FieldLabel htmlFor="note">Описание</FieldLabel>
            <Textarea
              id="note"
              autoComplete="off"
              {...register("note")}
              aria-invalid={!!errors.note}
            />
            {errors.note && <FieldError>{errors.note.message}</FieldError>}
          </Field>
        </FieldGroup>

        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={isPending}
            loading={isPending}
            size={"lg"}
          >
            Создать
          </Button>
        </div>
      </FieldSet>
    </form>
  );
};
