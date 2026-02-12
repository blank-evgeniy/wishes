import { apiFetch } from "../client";

export const checkHasSavedWishlist = async (id: number) => {
  return apiFetch<{ has: boolean }>(`/api/saved-wishlists/me/has/${id}`, {
    method: "GET",
  });
};
