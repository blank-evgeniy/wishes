import { apiFetch } from "../client";
import { SavedWishlistWithWishlist } from "../types";

export const getSavedWishlists = async () => {
  return apiFetch<SavedWishlistWithWishlist[]>(`/api/saved-wishlists/me`, {
    method: "GET",
  });
};
