"use client";

import { useQuery } from "@tanstack/react-query";

import { CreateWishForm, wishlistQueries } from "@/modules/wishlist";

import { CreateWishViewBreadcrumbs } from "./ui/create-wish-view-breadcrumbs";

interface CreateWishViewProps {
  wishlistId: number;
}

export const CreateWishView = ({ wishlistId }: CreateWishViewProps) => {
  const { data: wishlist, isLoading } = useQuery(
    wishlistQueries.wishlistDetails(wishlistId),
  );

  if (!isLoading && !wishlist) return null;

  return (
    <main className="flex flex-col gap-8">
      <CreateWishViewBreadcrumbs
        isLoading={isLoading}
        wishlistId={wishlistId}
        wishlistTitle={wishlist?.title || "Вишлист"}
      />

      <CreateWishForm wishlistId={wishlistId} />
    </main>
  );
};
