import { WishlistDetails } from "@/shared/api/types";

import { EmptyPublicWishlist } from "./empty-public-wishlist";
import { PublicWishCard } from "./public-wish-card";

interface PublicWishlistItemsProps {
  wishlist: WishlistDetails;
}

export const PublicWishlistItems = ({ wishlist }: PublicWishlistItemsProps) => {
  const { wishlist_items: items } = wishlist;

  if (!items) return null;

  if (items.length === 0) return <EmptyPublicWishlist />;

  return (
    <div className="grid md:grid-cols-4 grid-cols-2 sm:gap-8 gap-4">
      {wishlist.wishlist_items.map((item) => (
        <PublicWishCard data={item} key={item.id} />
      ))}
    </div>
  );
};
