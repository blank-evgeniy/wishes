import { useMutation, useQueryClient } from "@tanstack/react-query";

import { WishlistDetails } from "@/shared/api/types";
import { deleteWish } from "@/shared/api/wishlist-items/delete-wish";

import { wishlistQueries } from "../wishlists-queries";

export const useDeleteWish = (id: number, wishlistId?: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteWish(id),
    onSuccess: () => {
      if (wishlistId) {
        queryClient.setQueryData<WishlistDetails>(
          wishlistQueries.wishlistDetailsKey(wishlistId),
          (oldData) => {
            if (!oldData) return oldData;

            return {
              ...oldData,
              wishlist_items: oldData.wishlist_items.filter(
                (item) => item.id !== id,
              ),
            };
          },
        );
      }
    },
  });
};
