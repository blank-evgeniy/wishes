"use client";

import { PencilIcon, PlusIcon, TrashIcon } from "lucide-react";
import Link from "next/link";

import { useAuth } from "@/modules/auth";
import { WishlistDetails } from "@/shared/api/types";
import { routes } from "@/shared/routes";
import { Button } from "@/shared/ui/button";
import { CopyButton } from "@/shared/ui/copy-button";

import { DeleteWishlistAction } from "./delete-wishlist-action";
import { EditWishlistAction } from "./edit-wishlist-action";

interface MyWishlistActionsProps {
  wishlist?: WishlistDetails;
  isLoading?: boolean;
}

export const MyWishlistActions = ({
  wishlist,
  isLoading,
}: MyWishlistActionsProps) => {
  const user = useAuth();

  const containerCn = "sm:flex grid grid-cols-2 gap-4 flex-wrap";

  if (isLoading)
    return (
      <div className={containerCn}>
        <Button disabled>
          Новое желание <PlusIcon />
        </Button>

        <Button variant={"outline"} disabled>
          Редактировать <PencilIcon />
        </Button>

        <CopyButton disabled text="">
          Поделиться
        </CopyButton>

        <Button variant={"destructive"} className="sm:ml-auto" disabled>
          Удалить вишлист <TrashIcon />
        </Button>
      </div>
    );

  if (!wishlist) return null;

  const { id } = wishlist;

  return (
    <div className={containerCn}>
      <Button asChild>
        <Link href={routes.createWish(id)}>
          Новое желание <PlusIcon />
        </Link>
      </Button>

      <EditWishlistAction
        defaultValues={{ title: wishlist.title ?? "" }}
        className="w-full"
        id={id}
      />

      {!!user && (
        <CopyButton
          text={
            window.location.origin +
            routes.publicWishlist({
              userId: user.id,
              wishlistId: id,
            })
          }
        >
          Поделиться
        </CopyButton>
      )}

      <DeleteWishlistAction className="sm:ml-auto" id={id} />
    </div>
  );
};
