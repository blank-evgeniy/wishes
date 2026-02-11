import { apiFetch } from "../client";
import { Wishlist, WishlistInsertDto } from "../types";

export function createWishlist(payload: WishlistInsertDto): Promise<Wishlist> {
  return apiFetch("/api/wishlists", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
