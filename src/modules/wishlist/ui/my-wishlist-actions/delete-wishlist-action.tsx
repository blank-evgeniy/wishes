import { TrashIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { routes } from "@/shared/routes";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/shared/ui/alert-dialog";
import { Button } from "@/shared/ui/button";

import { useDeleteWishlist } from "../../api/mutations";

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
