import { Wishlist } from "@/shared/api/types";
import {
  createWishlist,
  CreateWishlistDto,
} from "@/shared/api/wishlists/create-wishlist";
import { wishlistQueries } from "@/shared/api/wishlists/wishlists-queries";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateWishlist = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateWishlistDto) => createWishlist(data),
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
