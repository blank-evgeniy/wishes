import { WishlistItemInsertDto } from "@/shared/api/types";
import { getUserOrThrow } from "@/shared/utils/supabase/server";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    const { supabase, user } = await getUserOrThrow();
    const body: WishlistItemInsertDto = await req.json();

    const { data: wishlist } = await supabase
      .from("wishlists")
      .select("id")
      .eq("id", id)
      .eq("owner_id", user.id)
      .single();

    if (!wishlist) throw new Error("Forbidden");

    const { data, error } = await supabase
      .from("wishlist_items")
      .insert(body)
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Failed to create item" },
      { status: 400 },
    );
  }
}
