import { apiFetch } from "../client";

export function deleteWish(id: number) {
  return apiFetch(`/api/wishlist-items/${id}`, {
    method: "DELETE",
  });
}
