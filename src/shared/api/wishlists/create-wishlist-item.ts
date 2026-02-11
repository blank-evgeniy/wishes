import { apiFetch } from "../client";
import { WishlistItem, WishlistItemInsertDto } from "../types";

export function createWishlistItem(
  payload: Omit<WishlistItemInsertDto, "id" | "created_at">,
): Promise<WishlistItem> {
  return apiFetch("/api/wishlist-items", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
