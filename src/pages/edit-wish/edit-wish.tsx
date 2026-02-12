"use client";

import { useQuery } from "@tanstack/react-query";

import { wishlistItemsQueries } from "@/shared/api/wishlist-items/wishlist-items-queries";

import { EditWishPageBreadcrumbs } from "./ui/edit-wish-page-breadcrumbs";
import { EditWishForm } from "./ui/edit-wish-form/edit-wish-form";
import { notFound } from "next/navigation";

interface EditWishPageProps {
  wishlistId: number;
  wishId: number;
}

export const EditWishPage = ({ wishlistId, wishId }: EditWishPageProps) => {
  const {
    data: wish,
    isLoading,
    error,
  } = useQuery(wishlistItemsQueries.wish(wishId));

  if (isLoading) {
    return <EditWishPageBreadcrumbs wishlistId={wishlistId} isLoading />;
  }

  console.log(error);
  if (error?.message === "Item not found") return notFound();

  if (!wish) return null;

  return (
    <main className="flex flex-col gap-8">
      <EditWishPageBreadcrumbs
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
