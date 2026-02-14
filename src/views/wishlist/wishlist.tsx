"use client";

import { useQuery } from "@tanstack/react-query";
import { notFound } from "next/navigation";

import { wishlistQueries } from "@/shared/api/wishlists/wishlists-queries";

import { EmptyWishlist } from "./ui/empty-wishlist";
import { WishCard } from "./ui/wish-card";
import { WishlistActions } from "./ui/wishlist-actions";
import { WishlistPageBreadcrumbs } from "./ui/wishlist-page-breadcrumbs";
import { WishlistPageSkeleton } from "./ui/wishlist-page-skeleton";
import { MyWishlistActions } from "@/modules/wishlist";

interface WishlistPageProps {
  id: number;
}

export const WishlistPage = ({ id }: WishlistPageProps) => {
  const {
    data: wishlist,
    isLoading,
    error,
  } = useQuery(wishlistQueries.wishlistDetails(id));

  if (isLoading) return <WishlistPageSkeleton />;

  if (error?.message === "Not Found") return notFound();

  if (!wishlist) return null;

  return (
    <main className="flex flex-col gap-12">
      <header className="flex flex-col gap-8">
        <WishlistPageBreadcrumbs pageTitle={wishlist.title || "Вишлист"} />

        <MyWishlistActions wishlist={wishlist} />
      </header>

      {wishlist.wishlist_items.length ? (
        <div className="grid md:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
          {wishlist.wishlist_items.map((item) => (
            <WishCard data={item} key={item.id} />
          ))}
        </div>
      ) : (
        <EmptyWishlist id={id} />
      )}
    </main>
  );
};
