import { useMutation, useQueryClient } from "@tanstack/react-query";

import { saveWishlist } from "@/shared/api/saved-wishlists/save-wishlist";
import { SavedWishlist, SavedWishlistInsertDto } from "@/shared/api/types";

import { wishlistQueries } from "../wishlists-queries";

export const useSaveWishlist = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: SavedWishlistInsertDto) => saveWishlist(data),
    onSuccess: (data) => {
      queryClient.setQueryData<SavedWishlist[]>(
        wishlistQueries.savedWishlistsKey(),
        (oldData) => {
          if (!oldData) return oldData;

          return [...oldData, data];
        },
      );

      queryClient.setQueryData<{ has: boolean }>(
        wishlistQueries.hasKey(data.wishlist_id!),
        {
          has: true,
        },
      );
    },
  });
};
