import { apiFetch } from "../client";
import { WishlistDetails } from "../types";

export function getWishlistDetails(
  wishlistId: number,
): Promise<WishlistDetails> {
  return apiFetch(`/api/wishlists/${wishlistId}/details`);
}
