import { PublicWishlistHeader, PublicWishlistItems } from "@/modules/wishlist";
import { WishlistDetails } from "@/shared/api/types";

interface PublicWishlistViewProps {
  wishlist: WishlistDetails;
}

export const PublicWishlistView = ({ wishlist }: PublicWishlistViewProps) => {
  return (
    <main className="flex flex-col gap-12">
      <PublicWishlistHeader wishlist={wishlist} />

      <PublicWishlistItems wishlist={wishlist} />
    </main>
  );
};
