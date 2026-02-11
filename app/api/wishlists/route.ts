import { NextRequest, NextResponse } from "next/server";
import { getUserOrThrow } from "@/shared/utils/supabase/server";
import { Wishlist } from "@/shared/api/types";

interface CreateWishlistBody {
  title: string;
}

export async function POST(req: NextRequest) {
  try {
    const { supabase, user } = await getUserOrThrow();
    const body: CreateWishlistBody = await req.json();

    const { data, error } = await supabase
      .from("wishlists")
      .insert({
        title: body.title,
        owner_id: user.id,
      })
      .select()
      .single<Wishlist>();

    if (error) throw error;

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Failed to create wishlist" },
      { status: 400 },
    );
  }
}
