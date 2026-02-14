import { Metadata } from "next";

import { EditWishView } from "@/views/edit-wish";

export const metadata: Metadata = {
  title: "Редактирование вишлиста",
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string; wishId: string }>;
}) {
  const { id, wishId } = await params;

  return <EditWishView wishlistId={Number(id)} wishId={Number(wishId)} />;
}
