import { PublicWishlistHeader, PublicWishlistItems } from "@/modules/wishlist";
import { WishlistDetails } from "@/shared/api/types";

interface PublicWishlistPageProps {
  wishlistId: number;
  userId: number;
  wishlist: WishlistDetails;
}

export const PublicWishlistPage = ({ wishlist }: PublicWishlistPageProps) => {
  return (
    <main className="flex flex-col gap-12">
      <PublicWishlistHeader wishlist={wishlist} />

      <PublicWishlistItems wishlist={wishlist} />
    </main>
  );
};
