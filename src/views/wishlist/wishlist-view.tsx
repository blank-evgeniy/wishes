"use client";

import { useQuery } from "@tanstack/react-query";
import { notFound } from "next/navigation";

import {
  MyWishlistActions,
  MyWishlistItems,
  wishlistQueries,
} from "@/modules/wishlist";

import { WishlistViewBreadcrumbs } from "./ui/wishlist-view-breadcrumbs";
import { WishlistViewSkeleton } from "./ui/wishlist-view-skeleton";

interface WishlistViewProps {
  id: number;
}

export const WishlistView = ({ id }: WishlistViewProps) => {
  const {
    data: wishlist,
    isLoading,
    error,
  } = useQuery(wishlistQueries.wishlistDetails(id));

  if (isLoading) return <WishlistViewSkeleton />;

  if (error?.message === "Not Found") return notFound();

  if (!wishlist) return null;

  return (
    <main className="flex flex-col gap-12">
      <header className="flex flex-col gap-8">
        <WishlistViewBreadcrumbs pageTitle={wishlist.title || "Вишлист"} />

        <MyWishlistActions wishlist={wishlist} />
      </header>

      <MyWishlistItems wishlist={wishlist} />
    </main>
  );
};
