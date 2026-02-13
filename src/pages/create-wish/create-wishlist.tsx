"use client";

import { useQuery } from "@tanstack/react-query";

import { wishlistQueries } from "@/shared/api/wishlists/wishlists-queries";

import { CreateWishForm } from "./ui/create-wish-form/create-wish-form";
import { CreateWishPageBreadcrumbs } from "./ui/create-wish-page-breadcrumbs";

interface CreateWishlistPageProps {
  wishlistId: number;
}

export const CreateWishlistPage = ({ wishlistId }: CreateWishlistPageProps) => {
  const { data: wishlist, isLoading } = useQuery(
    wishlistQueries.wishlistDetails(wishlistId),
  );

  if (!isLoading && !wishlist) return null;

  return (
    <main className="flex flex-col gap-8">
      <CreateWishPageBreadcrumbs
        isLoading={isLoading}
        wishlistId={wishlistId}
        wishlistTitle={wishlist?.title || "Вишлист"}
      />

      <CreateWishForm wishlistId={wishlistId} />
    </main>
  );
};
