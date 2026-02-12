import { WishlistItem } from "@/shared/api/types";
import { routes } from "@/shared/routes";
import { Button } from "@/shared/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenu,
} from "@/shared/ui/dropdown-menu";
import { EllipsisIcon, MenuIcon } from "lucide-react";
import Link from "next/link";

interface WishActionsProps {
  wish: WishlistItem;
  className?: string;
}

export const WishActions = ({ wish, className }: WishActionsProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className={className} size={"icon"}>
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
        <DropdownMenuItem variant="destructive">Удалить</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
