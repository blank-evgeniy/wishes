import { useMutation, useQueryClient } from "@tanstack/react-query";

import { WishlistDetails, WishlistItem, WishlistItemUpdateDto } from "@/shared/api/types";
import { updateWish } from "@/shared/api/wishlist-items/update-wish";
import { wishlistQueries } from "@/shared/api/wishlists/wishlists-queries";

export const useUpdateWish = (wishlistId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: WishlistItemUpdateDto }) =>
      updateWish(id, data),
    onSuccess: (data: WishlistItem) => {
      queryClient.setQueryData<WishlistDetails>(
        wishlistQueries.wishlistDetailsKey(wishlistId),

        (oldData) => {
          if (!oldData) return undefined;

          return {
            ...oldData,
            wishlist_items: oldData.wishlist_items.map((i) =>
              i.id === data.id ? data : i,
            ),
          };
        },
      );
    },
  });
};
