import { Metadata } from "next";
import { WishlistPage } from "@/pages/wishlist";

export const metadata: Metadata = {
  title: "Мои вишлисты",
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <WishlistPage id={Number(id)} />;
}
