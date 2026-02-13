import { Metadata } from "next";

import { EditWishPage } from "@/pages/edit-wish/edit-wish";

export const metadata: Metadata = {
  title: "Редактирование вишлиста",
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string; wishId: string }>;
}) {
  const { id, wishId } = await params;

  return <EditWishPage wishlistId={Number(id)} wishId={Number(wishId)} />;
}
