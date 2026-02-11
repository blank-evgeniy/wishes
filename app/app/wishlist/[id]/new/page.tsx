import { CreateWishlistPage } from "@/pages/create-wish";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <CreateWishlistPage wishlistId={Number(id)} />;
}
