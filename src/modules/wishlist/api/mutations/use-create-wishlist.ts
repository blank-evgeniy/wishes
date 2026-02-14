import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Wishlist, WishlistInsertDto } from "@/shared/api/types";
import { createWishlist } from "@/shared/api/wishlists/create-wishlist";

import { wishlistQueries } from "../wishlists-queries";

export const useCreateWishlist = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: WishlistInsertDto) => createWishlist(data),
    onSuccess: (data) => {
      queryClient.setQueryData<Wishlist[]>(
        wishlistQueries.myWishlistsKey(),
        (oldData) => {
          if (!oldData) return [data];
          return [...oldData, data];
        },
      );
    },
  });
};
