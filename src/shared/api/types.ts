import { Database } from "../../../database.types";

export type Wishlist = Database["public"]["Tables"]["wishlists"]["Row"];

export type WishlistInsertDto = Omit<
  Database["public"]["Tables"]["wishlists"]["Insert"],
  "created_at" | "owner_id" | "id"
>;

export type WishlistItem =
  Database["public"]["Tables"]["wishlist_items"]["Row"];

export type WishlistDetails = Wishlist & { wishlist_items: WishlistItem[] };

export type WishlistItemInsertDto = Omit<
  Database["public"]["Tables"]["wishlist_items"]["Insert"],
  "created_at" | "id"
>;
