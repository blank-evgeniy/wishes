import { apiFetch } from "../client";
import { WishlistItem, WishlistItemInsertDto } from "../types";

export function createWish(
  payload: Omit<WishlistItemInsertDto, "id" | "created_at">,
  wishlistId: number,
): Promise<WishlistItem> {
  return apiFetch(`/api/wishlists/${wishlistId}/items`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
