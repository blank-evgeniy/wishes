import { queryOptions } from "@tanstack/react-query";

import { checkHasSavedWishlist } from "./check-has-saved-wishlist";
import { getSavedWishlists } from "./get-saved-wishlists";

export const savedWishlistsQueries = {
  baseKey: () => ["saved"],

  savedWishlistsKey: () => [...savedWishlistsQueries.baseKey(), "me"],
  savedWishlists: () =>
    queryOptions({
      queryKey: savedWishlistsQueries.savedWishlistsKey(),
      queryFn: () => getSavedWishlists(),
    }),

  hasKey: (id: number) => [...savedWishlistsQueries.baseKey(), "has", id],
  has: (id: number) =>
    queryOptions({
      queryKey: savedWishlistsQueries.hasKey(id),
      queryFn: () => checkHasSavedWishlist(id),
    }),
};
