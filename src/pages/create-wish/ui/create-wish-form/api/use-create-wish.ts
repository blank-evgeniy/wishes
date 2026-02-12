import { useMutation, useQueryClient } from "@tanstack/react-query";

import { WishlistDetails, WishlistItemInsertDto } from "@/shared/api/types";
import { createWish } from "@/shared/api/wishlist-items/create-wish";
import { wishlistQueries } from "@/shared/api/wishlists/wishlists-queries";

export const useCreateWish = (wishlistId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: WishlistItemInsertDto) => createWish(data, wishlistId),
    onSuccess: (data) => {
      queryClient.setQueryData<WishlistDetails>(
        wishlistQueries.wishlistDetailsKey(data.wishlist_id!),

        (oldData) => {
          if (!oldData) return undefined;

          return {
            ...oldData,
            wishlist_items: [...oldData.wishlist_items, data],
          };
        },
      );
    },
  });
};
