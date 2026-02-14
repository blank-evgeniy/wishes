import { WishlistDetails } from "@/shared/api/types";

import { SaveWishlistAction } from "./save-wishlist-action";
import { YourWishlistBadge } from "./your-wishlist-badge";

interface PublicWishlistHeaderProps {
  wishlist: WishlistDetails;
}

export const PublicWishlistHeader = ({
  wishlist,
}: PublicWishlistHeaderProps) => {
  return (
    <header className="flex gap-4 justify-between items-center flex-wrap">
      {/*TODO: Данные пользователя */}
      <h1 className="text-3xl font-semibold">{wishlist.title}</h1>

      <SaveWishlistAction
        wishlistId={wishlist.id}
        ownerId={wishlist.owner_id!}
      />
      <YourWishlistBadge ownerId={wishlist.owner_id!} />
    </header>
  );
};
