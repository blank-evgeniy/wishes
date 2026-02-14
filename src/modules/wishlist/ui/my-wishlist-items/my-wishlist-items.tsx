import { WishlistDetails } from "@/shared/api/types";

import { MyWishCard } from "../my-wish-card";
import { EmptyMyWishlist } from "./empty-my-wishlist";

interface MyWishlistItemsProps {
  wishlist: WishlistDetails;
}

export const MyWishlistItems = ({ wishlist }: MyWishlistItemsProps) => {
  const { wishlist_items: items } = wishlist;

  if (!items) return null;

  if (items.length === 0) return <EmptyMyWishlist id={wishlist.id} />;

  return (
    <div className="grid md:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
      {wishlist.wishlist_items.map((item) => (
        <MyWishCard data={item} key={item.id} />
      ))}
    </div>
  );
};
