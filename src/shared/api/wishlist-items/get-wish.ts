import { apiFetch } from "../client";
import { WishlistItemWithWishlist } from "../types";

export function getWish(id: number): Promise<WishlistItemWithWishlist> {
  return apiFetch(`/api/wishlist-items/${id}`, {
    method: "GET",
  });
}
