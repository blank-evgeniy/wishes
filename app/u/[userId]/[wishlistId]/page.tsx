import { Metadata } from "next";
import { notFound } from "next/navigation";

import { PublicWishlistPage } from "@/pages/public-wishlist";
import { WishlistDetails } from "@/shared/api/types";
import { createClient } from "@/shared/utils/supabase/server";

export const metadata: Metadata = {
  title: "Вишлист",
};

async function getWishlistDetails(id: number) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("wishlists")
    .select(`*, wishlist_items (*)`)
    .eq("id", id)
    .single<WishlistDetails>();

  if (error) {
    console.warn("Ошибка при получении списка:", error.message);
    return null;
  }

  return data;
}

export default async function Page({
  params,
}: {
  params: Promise<{ userId: string; wishlistId: string }>;
}) {
  const { wishlistId, userId } = await params;

  const wishlistDetails = await getWishlistDetails(Number(wishlistId));

  if (!wishlistDetails) return notFound();

  if (wishlistDetails.owner_id !== userId) return notFound();

  return (
    <PublicWishlistPage
      wishlist={wishlistDetails}
      wishlistId={Number(wishlistId)}
      userId={Number(userId)}
    />
  );
}
