import { saveWishlist } from "@/shared/api/saved-wishlists/save-wishlist";
import { savedWishlistsQueries } from "@/shared/api/saved-wishlists/saved-wishlist-queries";
import { SavedWishlist, SavedWishlistInsertDto } from "@/shared/api/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useSaveWishlist = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: SavedWishlistInsertDto) => saveWishlist(data),
    onSuccess: (data) => {
      queryClient.setQueryData<SavedWishlist[]>(
        savedWishlistsQueries.savedWishlistsKey(),
        (oldData) => {
          if (!oldData) return oldData;

          return [...oldData, data];
        },
      );

      queryClient.setQueryData<{ has: boolean }>(
        savedWishlistsQueries.hasKey(data.wishlist_id!),
        {
          has: true,
        },
      );
    },
  });
};
