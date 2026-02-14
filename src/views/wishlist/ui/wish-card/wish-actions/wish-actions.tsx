import { EllipsisIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { WishlistItem } from "@/shared/api/types";
import { routes } from "@/shared/routes";
import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { cn } from "@/shared/utils/cn";

import { DeleteWishModal } from "./ui/delete-wish-modal";

interface WishActionsProps {
  wish: WishlistItem;
  className?: string;
}

export const WishActions = ({ wish, className }: WishActionsProps) => {
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const handleCloseDeleteModal = () => setIsOpenDeleteModal(false);
  const handleOpenDeleteModal = () => setIsOpenDeleteModal(true);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className={cn("cursor-pointer", className)} size={"icon"}>
            <span className="sr-only">Открыть меню</span>
            <EllipsisIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="bottom" align="end">
          <DropdownMenuItem asChild>
            <Link
              href={routes.editWish({
                wishId: wish.id,
                wishlistId: wish.wishlist_id!,
              })}
            >
              Редактировать
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            variant="destructive"
            onClick={handleOpenDeleteModal}
          >
            Удалить
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DeleteWishModal
        id={wish.id}
        wishlistId={wish.wishlist_id!}
        open={isOpenDeleteModal}
        onClose={handleCloseDeleteModal}
      />
    </>
  );
};
