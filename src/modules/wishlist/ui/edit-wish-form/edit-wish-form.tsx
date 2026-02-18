"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { routes } from "@/shared/routes";
import { Button } from "@/shared/ui/button";
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
import { RequiredMark } from "@/shared/ui/required-marl";
import { Textarea } from "@/shared/ui/textarea";

import { useUpdateWish } from "../../api/mutations/use-update-wish";
import { WishSchema, wishSchema } from "../../schema/wish-schema";

interface EditWishFormProps {
  wishlistId: number;
  wishId: number;
  defaultValues?: WishSchema;
}

export const EditWishForm = ({
  wishlistId,
  wishId,
  defaultValues,
}: EditWishFormProps) => {
  const router = useRouter();
  const { mutate, isPending } = useUpdateWish(wishlistId);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(wishSchema),
    defaultValues,
  });

  const onSubmit = (data: WishSchema) => {
    mutate(
      {
        id: wishId,
        data: { ...data, price: data.price ? Number(data.price) : null },
      },
      {
        onSuccess: () => {
          reset(data);

          toast.success("Желание успешно обновлено", {
            action: {
              label: "К вишлисту",
              onClick: () => router.push(routes.wishlist(wishlistId)),
            },
          });
        },
      },
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <FieldSet>
        <FieldLegend>Редактирование желания</FieldLegend>
        <FieldDescription>Измените данные желания</FieldDescription>

        <FieldGroup>
          <div className="flex gap-7 lg:flex-row flex-col">
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
          </div>

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
            <FieldLabel htmlFor="image_url">Ссылка на изображение</FieldLabel>
            <Input
              id="image_url"
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

        <div className="flex justify-end gap-4">
          <Button
            type="submit"
            disabled={isPending}
            size={"lg"}
            variant={"outline"}
            asChild
          >
            <Link href={routes.wishlist(wishlistId)}>Отмена</Link>
          </Button>

          <Button
            type="submit"
            disabled={isPending}
            loading={isPending}
            size={"lg"}
          >
            Сохранить
          </Button>
        </div>
      </FieldSet>
    </form>
  );
};
