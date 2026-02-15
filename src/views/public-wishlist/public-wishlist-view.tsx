import { PublicWishlistHeader, PublicWishlistItems } from "@/modules/wishlist";
import { PublicWishlistDetails } from "@/shared/api/types";

interface PublicWishlistViewProps {
  wishlist: PublicWishlistDetails;
}

export const PublicWishlistView = ({ wishlist }: PublicWishlistViewProps) => {
  return (
    <main className="flex flex-col gap-12">
      <PublicWishlistHeader wishlist={wishlist} />

      <PublicWishlistItems wishlist={wishlist} />
    </main>
  );
};
