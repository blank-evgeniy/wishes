import { useMutation, useQueryClient } from "@tanstack/react-query";

import { WishlistDetails, WishlistItemInsertDto } from "@/shared/api/types";
import { createWishlistItem } from "@/shared/api/wishlists/create-wishlist-item";
import { wishlistQueries } from "@/shared/api/wishlists/wishlists-queries";

export const useCreateWish = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: WishlistItemInsertDto) => createWishlistItem(data),
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
