"use client";

import { useQuery } from "@tanstack/react-query";

import { wishlistQueries } from "@/shared/api/wishlists/wishlists-queries";

import { WishCard } from "./ui/wish-card";
import { WishlistPageSkeleton } from "./ui/wishlist-page-skeleton";
import { WishlistPageBreadcrumbs } from "./ui/wishlist-page-breadcrumbs";
import { WishlistActions } from "./ui/wishlist-actions";

interface WishlistPageProps {
  id: number;
}

export const WishlistPage = ({ id }: WishlistPageProps) => {
  const { data: wishlist, isLoading } = useQuery(
    wishlistQueries.wishlistDetails(id),
  );

  if (isLoading) return <WishlistPageSkeleton />;

  if (!wishlist) return <div>Wishlist not found</div>;

  return (
    <main className="flex flex-col gap-12">
      <header className="flex flex-col gap-8">
        <WishlistPageBreadcrumbs pageTitle={wishlist.title || "Вишлист"} />

        <WishlistActions wishlist={wishlist} />
      </header>

      <div className="grid md:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
        {wishlist.wishlist_items.map((item) => (
          <WishCard data={item} key={item.id} />
        ))}
      </div>
    </main>
  );
};
