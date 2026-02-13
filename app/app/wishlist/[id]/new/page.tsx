import { CreateWishlistPage } from "@/pages/create-wish";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Новый вишлист",
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <CreateWishlistPage wishlistId={Number(id)} />;
}
