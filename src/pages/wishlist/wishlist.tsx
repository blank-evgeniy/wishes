"use client";
import { useQuery } from "@tanstack/react-query";
import { PencilIcon, PlusIcon, TrashIcon } from "lucide-react";
import Link from "next/link";

import { wishlistQueries } from "@/shared/api/wishlists/wishlists-queries";
import { routes } from "@/shared/routes";
import { Button } from "@/shared/ui/button";

import { WishCard } from "./ui/wish-card";
import { WishlistPageSkeleton } from "./ui/wishlist-page-skeleton";
import { WishlistPageBreadcrumbs } from "./ui/wishlist-page-breadcrumbs";

interface WishlistPageProps {
  id: number;
}

export const WishlistPage = ({ id }: WishlistPageProps) => {
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

          <Button asChild variant={"outline"}>
            <Link href={routes.createWish(id)}>
              Изменить название <PencilIcon />
            </Link>
          </Button>

          <Button asChild variant={"destructive"} className="ml-auto">
            <Link href={routes.createWish(id)}>
              Удалить вишлист <TrashIcon />
            </Link>
          </Button>
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
