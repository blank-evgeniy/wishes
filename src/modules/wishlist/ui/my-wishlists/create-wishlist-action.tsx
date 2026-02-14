import { zodResolver } from "@hookform/resolvers/zod";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";
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

import { useCreateWishlist } from "../../api/mutations/use-create-wishlist";
import { WishlistSchema, wishlistSchema } from "../../schema/wishlist-schema";

export const CreateWishlistAction = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { mutate: createWishlist, isPending } = useCreateWishlist();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(wishlistSchema),
    defaultValues: {
      title: "",
    },
  });

  const onSubmit = (data: WishlistSchema) => {
    createWishlist(data, {
      onSuccess: () => {
        reset();
        setIsOpen(false);
      },
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <form id="create-wishlist" onSubmit={handleSubmit(onSubmit)}>
        <DialogTrigger asChild>
          <button className="flex h-35 w-full cursor-pointer">
            <Card className="border-dashed flex items-center justify-center hover:bg-accent/50 transition-colors duration-100 size-full">
              <PlusIcon className="text-primary size-12" />
            </Card>
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Новый вишлист</DialogTitle>
            <DialogDescription>
              Введите название для вашего нового вишлиста. Например,{" "}
              {'"День рождения"'}
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
              form="create-wishlist"
              type="submit"
              disabled={isPending}
              loading={isPending}
            >
              Создать
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};
