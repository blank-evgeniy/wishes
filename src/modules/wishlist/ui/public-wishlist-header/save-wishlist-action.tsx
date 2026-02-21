"use client";

import { useQuery } from "@tanstack/react-query";
import { SaveIcon } from "lucide-react";

import { useAuth } from "@/modules/auth";
import { Button } from "@/shared/ui/button";

import { useSaveWishlist } from "../../api/mutations";
import { wishlistQueries } from "../../api/wishlists-queries";

export const SaveWishlistAction = ({
  wishlistId,
  ownerId,
}: {
  wishlistId: number;
  ownerId: string;
}) => {
  const user = useAuth();

  const { data, isLoading } = useQuery(wishlistQueries.has(wishlistId));

  const isSaved = !!data?.has;

  const { mutate: saveWishlist, isPending } = useSaveWishlist();

  if (!user || user.id === ownerId) return null;

  const handleSave = () => {
    if (isSaved) return;
    saveWishlist({ wishlist_id: wishlistId });
  };

  return (
    <Button
      disabled={isLoading || isPending || isSaved}
      loading={isLoading || isPending}
      onClick={handleSave}
    >
      {isSaved ? "Сохранено" : "Сохранить"} <SaveIcon />
    </Button>
  );
};
