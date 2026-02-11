import { apiFetch } from "../client";
import { Wishlist } from "../types";

export type CreateWishlistDto = { title: string };

export function createWishlist(payload: CreateWishlistDto): Promise<Wishlist> {
  return apiFetch("/api/wishlists", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
