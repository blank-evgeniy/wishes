import { TrashIcon } from "lucide-react";

import {
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialog,
} from "@/shared/ui/alert-dialog";
import { Button } from "@/shared/ui/button";
import { useState } from "react";
import { useDeleteWishlist } from "./api/use-delete-wishlist";
import { useRouter } from "next/navigation";
import { routes } from "@/shared/routes";

interface DeleteWishlistActionProps {
  id: number;
  className?: string;
}

export const DeleteWishlistAction = ({
  id,
  className,
}: DeleteWishlistActionProps) => {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const { mutate: deleteWishlist, isPending } = useDeleteWishlist(id);

  const handleDeleteWishlist = () => {
    deleteWishlist(undefined, {
      onSuccess: () => {
        setOpen(false);
        router.replace(routes.dashboard);
      },
    });
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant={"destructive"} className={className}>
          Удалить вишлист <TrashIcon />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Вы уверены?</AlertDialogTitle>
          <AlertDialogDescription>
            Это действие нельзя будет отменить
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant={"default"} disabled={isPending}>
            Отмена
          </AlertDialogCancel>
          <Button
            variant={"outline"}
            disabled={isPending}
            loading={isPending}
            onClick={handleDeleteWishlist}
          >
            Удалить
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
