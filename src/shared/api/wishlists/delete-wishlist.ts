import { apiFetch } from "../client";
import { Wishlist } from "../types";

export function deleteWishlist(id: number): Promise<Wishlist> {
  return apiFetch(`/api/wishlists/${id}`, {
    method: "DELETE",
  });
}
