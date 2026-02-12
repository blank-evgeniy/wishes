"use client";
import { useQuery } from "@tanstack/react-query";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

import { wishlistQueries } from "@/shared/api/wishlists/wishlists-queries";
import { routes } from "@/shared/routes";
import { Button } from "@/shared/ui/button";

import { WishCard } from "./ui/wish-card";
import { WishlistPageSkeleton } from "./ui/wishlist-page-skeleton";
import { WishlistPageBreadcrumbs } from "./ui/wishlist-page-breadcrumbs";
import { DeleteWishlistAction } from "./ui/delete-wishlist-action";
import { EditWishlistAction } from "./ui/edit-wishlist-action";
import { CopyButton } from "@/shared/ui/copy-button";
import { useAuth } from "@/context/auth-context";

interface WishlistPageProps {
  id: number;
}

export const WishlistPage = ({ id }: WishlistPageProps) => {
  const user = useAuth();
  const { data: wishlist, isLoading } = useQuery(
    wishlistQueries.wishlistDetails(id),
  );

  if (isLoading) return <WishlistPageSkeleton />;

  if (!wishlist) return <div>Wishlist not found</div>;

  return (
    <main className="flex flex-col gap-12">
      <header className="flex flex-col gap-8">
        <WishlistPageBreadcrumbs pageTitle={wishlist.title || "Вишлист"} />

        <div className="flex gap-4">
          <Button asChild>
            <Link href={routes.createWish(id)}>
              Новое желание <PlusIcon />
            </Link>
          </Button>

          <EditWishlistAction
            defaultValues={{ title: wishlist.title ?? "" }}
            id={id}
          />

          {!!user && (
            <CopyButton
              text={
                window.location.origin +
                routes.publicWishlist({
                  userId: user.id,
                  wishlistId: id,
                })
              }
            >
              Поделиться
            </CopyButton>
          )}

          <DeleteWishlistAction className="ml-auto" id={id} />
        </div>
      </header>

      <div className="grid grid-cols-3 gap-8">
        {wishlist.wishlist_items.map((item) => (
          <WishCard data={item} key={item.id} />
        ))}
      </div>
    </main>
  );
};
