import { toast } from "sonner";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/shared/ui/alert-dialog";
import { Button } from "@/shared/ui/button";

import { useDeleteWish } from "../../api/mutations";

interface DeleteWishModalProps {
  open: boolean;
  onClose: () => void;
  id: number;
  wishlistId: number;
}

export const DeleteWishModal = ({
  id,
  wishlistId,
  open,
  onClose,
}: DeleteWishModalProps) => {
  const { mutate: deleteWish, isPending } = useDeleteWish(id, wishlistId);

  const handleDeleteWish = () => {
    deleteWish(undefined, {
      onSuccess: () => {
        toast.success("Желание успешно удалено");
        onClose();
      },
    });
  };

  return (
    <AlertDialog open={open} onOpenChange={onClose}>
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
            onClick={handleDeleteWish}
          >
            Удалить
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
