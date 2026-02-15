import { PublicWishlistDetails } from "@/shared/api/types";
import { UserCard } from "@/shared/ui/user-card";

import { SaveWishlistAction } from "./save-wishlist-action";
import { YourWishlistBadge } from "./your-wishlist-badge";

interface PublicWishlistHeaderProps {
  wishlist: PublicWishlistDetails;
}

export const PublicWishlistHeader = ({
  wishlist,
}: PublicWishlistHeaderProps) => {
  return (
    <header className="flex gap-4 justify-between items-center flex-wrap">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold">{wishlist.title}</h1>

        <UserCard
          name={wishlist.owner.display_name}
          avatar={wishlist.owner.avatarSrc}
        />
      </div>

      <SaveWishlistAction
        wishlistId={wishlist.id}
        ownerId={wishlist.owner_id!}
      />
      <YourWishlistBadge ownerId={wishlist.owner_id!} />
    </header>
  );
};
