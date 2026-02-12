"use client";

import { routes } from "@/shared/routes";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { savedWishlistsQueries } from "@/shared/api/saved-wishlists/saved-wishlist-queries";
import { Item, ItemContent, ItemTitle, ItemActions } from "@/shared/ui/item";
import { ChevronRightIcon, NotebookPenIcon } from "lucide-react";
import { Skeleton } from "@/shared/ui/skeleton";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/shared/ui/empty";

export const SavedWishlists = () => {
  const { data: wishlists, isLoading } = useQuery(
    savedWishlistsQueries.savedWishlists(),
  );

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Сохраненные вишлисты</h2>

      <div className="flex flex-col gap-4 items-stretch">
        {isLoading &&
          new Array(3)
            .fill(0)
            .map((_, i) => <Skeleton className="h-12 w-full" key={i} />)}

        {!isLoading && !wishlists?.length && (
          <Empty>
            <EmptyHeader>
              <EmptyMedia>
                <NotebookPenIcon />
              </EmptyMedia>
              <EmptyTitle>Нет сохраненных вишлистов</EmptyTitle>
              <EmptyDescription>
                Попросите вашего друга поделиться с вами своим вишлистом
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        )}

        {wishlists?.map(({ wishlists: w }) => (
          <Item variant={"card"} size="sm" asChild key={w.id} className="h-12">
            <Link
              href={routes.publicWishlist({
                userId: w.owner_id!,
                wishlistId: w.id,
              })}
            >
              <ItemContent>
                <ItemTitle>{w?.title}</ItemTitle>
              </ItemContent>
              <ItemActions>
                <ChevronRightIcon className="size-4" />
              </ItemActions>
            </Link>
          </Item>
        ))}
      </div>
    </section>
  );
};
