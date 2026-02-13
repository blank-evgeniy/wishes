import { queryOptions } from "@tanstack/react-query";

import { getWish } from "./get-wish";

export const wishlistItemsQueries = {
  baseKey: () => ["wishes"],

  wishKey: (wishId: number) => [...wishlistItemsQueries.baseKey(), wishId],
  wish: (wishId: number) =>
    queryOptions({
      queryKey: wishlistItemsQueries.wishKey(wishId),
      queryFn: () => getWish(wishId),
    }),
};
