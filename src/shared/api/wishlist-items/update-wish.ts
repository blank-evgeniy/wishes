import { apiFetch } from "../client";
import { WishlistItem, WishlistItemUpdateDto } from "../types";

export function updateWish(
  id: number,
  data: WishlistItemUpdateDto,
): Promise<WishlistItem> {
  return apiFetch(`/api/wishlist-items/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
}
