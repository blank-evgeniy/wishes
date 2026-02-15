import { Metadata } from "next";
import { notFound } from "next/navigation";

import { PublicWishlistDetails } from "@/shared/api/types";
import { createClient } from "@/shared/utils/supabase/server";
import { PublicWishlistView } from "@/views/public-wishlist";

export const metadata: Metadata = {
  title: "Вишлист",
};

async function getWishlistDetails(id: number) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("wishlists")
    .select(
      `
      *,
      wishlist_items (*),
      owner:profiles (*)
    `,
    )
    .eq("id", id)
    .single<PublicWishlistDetails>();

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

  return <PublicWishlistView wishlist={wishlistDetails} />;
}
