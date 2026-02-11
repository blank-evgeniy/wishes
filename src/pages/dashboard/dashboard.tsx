"use client";

import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardFooter } from "@/shared/ui/card";
import { Avatar, AvatarFallback } from "@/shared/ui/avatar";
import { ChevronRightIcon, PlusIcon } from "lucide-react";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/shared/ui/item";
import { routes } from "@/shared/routes";
import Link from "next/link";

export const DashboardPage = () => {
  const mockWishlists = [
    {
      id: 1,
      title: "Вишлист 1",
    },
    {
      id: 2,
      title: "Вишлист 2",
    },
    {
      id: 3,
      title: "Вишлист 3",
    },
  ];

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
      <section>
        <h2 className="text-xl font-semibold mb-4">Мои вишлисты</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link href={routes.createWishlist} className="flex h-full">
            <Card className="border-dashed flex items-center justify-center hover:bg-accent/50 transition-colors duration-100 size-full">
              <PlusIcon className="text-primary size-12" />
            </Card>
          </Link>
          {mockWishlists.map((w) => (
            <Card key={w.id} className="hover:shadow-lg transition-shadow">
              <CardContent>
                <h3 className="text-lg font-medium">{w.title}</h3>
              </CardContent>
              <CardFooter>
                <Button asChild size="sm" className="w-full">
                  <Link href={routes.wishlist(w.id)}>Открыть</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

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
