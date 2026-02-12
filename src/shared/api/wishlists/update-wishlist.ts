import { apiFetch } from "../client";
import { Wishlist, WishlistUpdateDto } from "../types";

export function updateWishlist(
  data: WishlistUpdateDto,
  id: number,
): Promise<Wishlist> {
  return apiFetch(`/api/wishlists/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
}
