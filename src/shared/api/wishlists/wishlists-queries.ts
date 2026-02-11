import { queryOptions } from "@tanstack/react-query";
import { getMyWishlists } from "./get-my-wishlists";

export const wishlistQueries = {
  baseKey: () => ["wishlists"],

  myWishlistsKey: () => [...wishlistQueries.baseKey(), "me"],
  myWishlists: () =>
    queryOptions({
      queryKey: wishlistQueries.myWishlistsKey(),
      queryFn: getMyWishlists,
    }),
};
