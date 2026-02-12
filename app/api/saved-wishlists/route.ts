import { SavedWishlist, SavedWishlistInsertDto } from "@/shared/api/types";
import { getUserOrThrow } from "@/shared/utils/supabase/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { supabase, user } = await getUserOrThrow();
    const body: SavedWishlistInsertDto = await req.json();

    const { data, error } = await supabase
      .from("saved_wishlists")
      .insert({
        user_id: user.id,
        wishlist_id: body.wishlist_id,
      })
      .select()
      .single<SavedWishlist>();

    if (error) throw error;

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Failed to save wishlist" },
      { status: 400 },
    );
  }
}
