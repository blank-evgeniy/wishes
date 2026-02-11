"use client";

import { Avatar, AvatarFallback } from "@/shared/ui/avatar";
import { ChevronRightIcon } from "lucide-react";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/shared/ui/item";
import { routes } from "@/shared/routes";
import Link from "next/link";
import { MyWishlists } from "./ui/my-wishlists";

export const DashboardPage = () => {
  const mockSavedWishlists = [
    {
      id: 1,
      title: "Вишлист 1",
      user: {
        email: "b7aYt@example.com",
      },
    },
    {
      id: 2,
      title: "Вишлист 2",
      user: {
        email: "b7aYt@example.com",
      },
    },
  ];

  return (
    <main className="flex flex-col gap-8">
      <MyWishlists />

      <section className="flex-1">
        <h2 className="text-xl font-semibold mb-4">Сохраненные вишлисты</h2>

        {mockSavedWishlists.length === 0 ? (
          <p className="text-gray-500">
            Здесь будут сохраненный вишлисты ваших друзей.
          </p>
        ) : (
          <div className="flex flex-col gap-4">
            {mockSavedWishlists.map((w) => (
              <Item variant={"card"} size="sm" asChild key={w.id}>
                <Link href={routes.wishlist(w.id)}>
                  <ItemMedia>
                    <Avatar>
                      <AvatarFallback>
                        {w.user.email.slice(0, 1).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>{w.title}</ItemTitle>
                  </ItemContent>
                  <ItemActions>
                    <ChevronRightIcon className="size-4" />
                  </ItemActions>
                </Link>
              </Item>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};
