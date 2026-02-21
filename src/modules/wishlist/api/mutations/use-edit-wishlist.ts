import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  Wishlist,
  WishlistDetails,
  WishlistUpdateDto,
} from "@/shared/api/types";
import { updateWishlist } from "@/shared/api/wishlists/update-wishlist";

import { wishlistQueries } from "../wishlists-queries";

export const useEditWishlist = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: WishlistUpdateDto) => updateWishlist(data, id),

    onSuccess: (data) => {
      queryClient.setQueryData<Wishlist[]>(
        wishlistQueries.myWishlistsKey(),
        (oldData) => {
          if (!oldData) return oldData;

          return oldData.map((item) => (item.id === id ? data : item));
        },
      );

      queryClient.setQueryData<WishlistDetails>(
        wishlistQueries.wishlistDetailsKey(id),
        (oldData) => {
          if (!oldData) return oldData;

          return {
            ...data,
            wishlist_items: oldData.wishlist_items,
          };
        },
      );
    },
  });
};
