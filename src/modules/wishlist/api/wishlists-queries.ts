import { queryOptions } from "@tanstack/react-query";

import { checkHasSavedWishlist } from "@/shared/api/saved-wishlists/check-has-saved-wishlist";
import { getSavedWishlists } from "@/shared/api/saved-wishlists/get-saved-wishlists";
import { getWish } from "@/shared/api/wishlist-items/get-wish";
import { getMyWishlists } from "@/shared/api/wishlists/get-my-wishlists";
import { getWishlistDetails } from "@/shared/api/wishlists/get-wishlist-details";

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

  savedBaseKey: () => [...wishlistQueries.baseKey(), "saved"],

  savedWishlistsKey: () => [...wishlistQueries.savedBaseKey(), "me"],
  savedWishlists: () =>
    queryOptions({
      queryKey: wishlistQueries.savedWishlistsKey(),
      queryFn: () => getSavedWishlists(),
    }),

  hasKey: (id: number) => [...wishlistQueries.savedBaseKey(), "has", id],
  has: (id: number) =>
    queryOptions({
      queryKey: wishlistQueries.hasKey(id),
      queryFn: () => checkHasSavedWishlist(id),
    }),

  itemsBaseKey: () => [...wishlistQueries.baseKey(), "items"],

  itemKey: (wishId: number) => [...wishlistQueries.itemsBaseKey(), wishId],
  item: (wishId: number) =>
    queryOptions({
      queryKey: wishlistQueries.itemKey(wishId),
      queryFn: () => getWish(wishId),
    }),
};
