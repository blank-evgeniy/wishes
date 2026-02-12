"use client";

import { useQuery } from "@tanstack/react-query";
import { SaveIcon } from "lucide-react";

import { useAuth } from "@/context/auth-context";

import { savedWishlistsQueries } from "@/shared/api/saved-wishlists/saved-wishlist-queries";
import { Button } from "@/shared/ui/button";

import { useSaveWishlist } from "./api/use-save-wishlist";

export const SaveWishlistAction = ({ wishlistId }: { wishlistId: number }) => {
  const user = useAuth();

  const { data, isLoading } = useQuery(savedWishlistsQueries.has(wishlistId));

  const isSaved = !!data?.has;

  const { mutate: saveWishlist, isPending } = useSaveWishlist();

  if (!user) return null;

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
