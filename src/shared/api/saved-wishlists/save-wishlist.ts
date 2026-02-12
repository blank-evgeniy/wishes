import { apiFetch } from "../client";
import { SavedWishlist, SavedWishlistInsertDto } from "../types";

export const saveWishlist = async (payload: SavedWishlistInsertDto) => {
  return apiFetch<SavedWishlist>(`/api/saved-wishlists`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
};
