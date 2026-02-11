import { apiFetch } from "../client";
import { Wishlist } from "../types";

export function getMyWishlists(): Promise<Wishlist[]> {
  return apiFetch("/api/wishlists/me");
}
