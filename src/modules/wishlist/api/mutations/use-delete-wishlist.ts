import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Wishlist } from "@/shared/api/types";
import { deleteWishlist } from "@/shared/api/wishlists/delete-wishlist";

import { wishlistQueries } from "../wishlists-queries";

export const useDeleteWishlist = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteWishlist(id),

    onSuccess: () => {
      queryClient.setQueryData<Wishlist[]>(
        wishlistQueries.myWishlistsKey(),
        (oldData) => {
          if (!oldData) return oldData;

          return oldData.filter((item) => item.id !== id);
        },
      );
    },
  });
};
