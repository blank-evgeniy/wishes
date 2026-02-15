import { apiFetch } from "../client";
import { SavedWishlist } from "../types";

export const getSavedWishlists = async () => {
  return apiFetch<SavedWishlist[]>(`/api/saved-wishlists/me`, {
    method: "GET",
  });
};
