import { queryOptions } from "@tanstack/react-query";

import { getMyWishlists } from "./get-my-wishlists";
import { getWishlistDetails } from "./get-wishlist-details";

export const wishlistQueries = {
  baseKey: () => ["wishlists"],

  myWishlistsKey: () => [...wishlistQueries.baseKey(), "me"],
  myWishlists: () =>
    queryOptions({
      queryKey: wishlistQueries.myWishlistsKey(),
      queryFn: getMyWishlists,
    }),

  wishlistDetailsKey: (wishlistId: number) => [
    ...wishlistQueries.baseKey(),
    wishlistId,
    "details",
  ],

  wishlistDetails: (wishlistId: number) =>
    queryOptions({
      queryKey: wishlistQueries.wishlistDetailsKey(wishlistId),
      queryFn: () => getWishlistDetails(wishlistId),
    }),
};
