import { Metadata } from "next";

import { WishlistView } from "@/views/wishlist";

export const metadata: Metadata = {
  title: "Мои вишлисты",
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <WishlistView id={Number(id)} />;
}
