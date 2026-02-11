"use client";

import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardFooter } from "@/shared/ui/card";

import { routes } from "@/shared/routes";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { wishlistQueries } from "@/shared/api/wishlists/wishlists-queries";
import { CreateWishlistAction } from "./create-wishlist-action";

export const MyWishlists = () => {
  const { data: wishlists, isLoading } = useQuery(
    wishlistQueries.myWishlists(),
  );

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Мои вишлисты</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <CreateWishlistAction />

        {wishlists?.map((w) => (
          <Card
            key={w.id}
            className="hover:shadow-lg transition-shadow h-35 flex flex-col"
          >
            <CardContent className="flex-1">
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
  );
};
