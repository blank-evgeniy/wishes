import { Wishlist } from "@/shared/api/types";
import { deleteWishlist } from "@/shared/api/wishlists/delete-wishlist";
import { wishlistQueries } from "@/shared/api/wishlists/wishlists-queries";
import { useMutation, useQueryClient } from "@tanstack/react-query";

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
