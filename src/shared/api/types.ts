import { Database } from "../../../database.types";

export type Wishlist = Database["public"]["Tables"]["wishlists"]["Row"];

export type WishlistInsertDto = Omit<
  Database["public"]["Tables"]["wishlists"]["Insert"],
  "created_at" | "owner_id" | "id"
>;
export type WishlistUpdateDto = Omit<
  Database["public"]["Tables"]["wishlists"]["Update"],
  "created_at" | "owner_id" | "id"
>;

export type WishlistItem =
  Database["public"]["Tables"]["wishlist_items"]["Row"];
export type WishlistItemWithWishlist = WishlistItem & { wishlists: Wishlist };

export type WishlistDetails = Wishlist & { wishlist_items: WishlistItem[] };

export type WishlistItemInsertDto = Omit<
  Database["public"]["Tables"]["wishlist_items"]["Insert"],
  "created_at" | "id" | "wishlist_id"
>;

export type WishlistItemUpdateDto = Omit<
  Database["public"]["Tables"]["wishlist_items"]["Update"],
  "created_at" | "id" | "wishlist_id"
>;

export type SavedWishlist =
  Database["public"]["Tables"]["saved_wishlists"]["Row"];
export type SavedWishlistInsertDto = Omit<
  Database["public"]["Tables"]["saved_wishlists"]["Insert"],
  "id" | "created_at" | "user_id"
>;
