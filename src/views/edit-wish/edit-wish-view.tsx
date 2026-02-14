"use client";

import { useQuery } from "@tanstack/react-query";
import { notFound } from "next/navigation";

import { EditWishForm, wishlistQueries } from "@/modules/wishlist";

import { EditWishViewBreadcrumbs } from "./ui/edit-wish-view-breadcrumbs";

interface EditWishViewProps {
  wishlistId: number;
  wishId: number;
}

export const EditWishView = ({ wishlistId, wishId }: EditWishViewProps) => {
  const {
    data: wish,
    isLoading,
    error,
  } = useQuery(wishlistQueries.item(wishId));

  if (isLoading) {
    return <EditWishViewBreadcrumbs wishlistId={wishlistId} isLoading />;
  }

  if (error?.message === "Item not found") return notFound();

  if (!wish) return null;

  return (
    <main className="flex flex-col gap-8">
      <EditWishViewBreadcrumbs
        wishlistId={wishlistId}
        wishlistTitle={wish?.wishlists.title || "Вишлист"}
      />

      <EditWishForm
        wishlistId={wishlistId}
        wishId={wishId}
        defaultValues={{
          image_url: wish.image_url ?? undefined,
          url: wish.url ?? undefined,
          note: wish.note ?? undefined,
          price: wish.price ? String(wish.price) : undefined,
          title: wish.title || "",
        }}
      />
    </main>
  );
};
