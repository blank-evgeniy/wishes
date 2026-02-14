import { Metadata } from "next";

import { CreateWishView } from "@/views/create-wish";

export const metadata: Metadata = {
  title: "Новый вишлист",
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <CreateWishView wishlistId={Number(id)} />;
}
