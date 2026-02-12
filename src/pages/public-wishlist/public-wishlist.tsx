import { PublicWishCard } from "./ui/public-wish-card";
import { WishlistDetails } from "@/shared/api/types";
import { SaveWishlistAction } from "./ui/save-wishlist-action";

interface PublicWishlistPageProps {
  wishlistId: number;
  userId: number;
  wishlist: WishlistDetails;
}

export const PublicWishlistPage = ({ wishlist }: PublicWishlistPageProps) => {
  return (
    <main className="flex flex-col gap-12">
      <header className="flex gap-4 justify-between items-center">
        {/* Данные пользователя */}
        <h1 className="text-3xl font-semibold">{wishlist.title}</h1>

        <SaveWishlistAction
          wishlistId={wishlist.id}
          ownerId={wishlist.owner_id!}
        />
      </header>

      <div className="grid grid-cols-3 gap-8">
        {wishlist.wishlist_items.map((item) => (
          <PublicWishCard data={item} key={item.id} />
        ))}
      </div>
    </main>
  );
};
