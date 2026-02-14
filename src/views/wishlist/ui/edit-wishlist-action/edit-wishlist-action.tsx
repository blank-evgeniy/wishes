import { zodResolver } from "@hookform/resolvers/zod";
import { PencilIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import { Field, FieldError, FieldLabel } from "@/shared/ui/field";
import { Input } from "@/shared/ui/input";

import { useEditWishlist } from "./api/use-edit-wishlist";
import { UpdateWishlistSchema,updateWishlistSchema } from "./model/schema";

interface EditWishlistActionProps {
  id: number;
  defaultValues: UpdateWishlistSchema;
  className?: string;
}

export const EditWishlistAction = ({
  className,
  id,
  defaultValues,
}: EditWishlistActionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { mutate: updateWishlist, isPending } = useEditWishlist(id);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(updateWishlistSchema),
    defaultValues,
  });

  const onSubmit = (data: UpdateWishlistSchema) => {
    updateWishlist(data, {
      onSuccess: () => {
        reset(data);
        setIsOpen(false);
      },
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <form id="Update-wishlist" onSubmit={handleSubmit(onSubmit)}>
        <DialogTrigger asChild>
          <Button variant={"outline"} className={className}>
            Редактировать <PencilIcon />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Редактировать вишлист</DialogTitle>
            <DialogDescription>
              Введите новое название для вашего нового вишлиста.
            </DialogDescription>
          </DialogHeader>

          <Field>
            <FieldLabel htmlFor="title">Название</FieldLabel>
            <Input
              id="title"
              placeholder="День рождения"
              {...register("title")}
            />
            {errors.title && <FieldError>{errors.title.message}</FieldError>}
          </Field>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" type="button" disabled={isPending}>
                Отмена
              </Button>
            </DialogClose>
            <Button
              form="Update-wishlist"
              type="submit"
              disabled={isPending}
              loading={isPending}
            >
              Сохранить
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};
