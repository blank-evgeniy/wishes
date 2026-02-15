"use client";

import { useQuery } from "@tanstack/react-query";
import { ChevronRightIcon, NotebookPenIcon } from "lucide-react";
import Link from "next/link";

import { routes } from "@/shared/routes";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/shared/ui/empty";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/shared/ui/item";
import { Skeleton } from "@/shared/ui/skeleton";
import { UserAvatar } from "@/shared/ui/user-avatar";

import { wishlistQueries } from "../../api/wishlists-queries";

export const SavedWishlists = () => {
  const { data: wishlists, isLoading } = useQuery(
    wishlistQueries.savedWishlists(),
  );

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Сохраненные вишлисты</h2>

      <div className="flex flex-col gap-4 items-stretch">
        {isLoading &&
          new Array(3)
            .fill(0)
            .map((_, i) => <Skeleton className="h-14.5 w-full" key={i} />)}

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
          <Item
            variant={"card"}
            size="sm"
            asChild
            key={w.id}
            className="h-14.5"
          >
            <Link
              href={routes.publicWishlist({
                userId: w.owner_id!,
                wishlistId: w.id,
              })}
            >
              <ItemMedia>
                <UserAvatar
                  src={w.owner.avatarSrc}
                  alt={w.owner.display_name}
                  fallback={w.owner.display_name}
                />
              </ItemMedia>
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
