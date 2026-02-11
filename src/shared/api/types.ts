export interface Wishlist {
  id: number;
  title: string | null;
  owner_id: string | null;
  created_at: string;
}

export interface WishlistItem {
  id: number;
  created_at: string;
  wishlist_id: number | null;
  title: string | null;
  price: number | null;
  url: string | null;
  image_url: string | null;
  note: string | null;
}

export interface SavedWishlist {
  id: number;
  created_at: string;
  user_id: string | null;
  wishlist_id: number | null;
}

export interface WishlistWithItems extends Wishlist {
  wishlist_items: WishlistItem[];
}

export interface SavedWishlistWithAuthor {
  id: number;
  created_at: string;
  wishlist: Wishlist & {
    owner: {
      id: string;
      email: string;
    };
  };
}
