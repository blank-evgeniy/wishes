import { NextResponse } from "next/server";

import { Wishlist, WishlistUpdateDto } from "@/shared/api/types";
import { getUserOrThrow } from "@/shared/utils/supabase/server";

export async function DELETE(
  _: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const { supabase, user } = await getUserOrThrow();

    const { error } = await supabase
      .from("wishlists")
      .delete()
      .eq("id", Number(id))
      .eq("owner_id", user.id);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to delete" }, { status: 400 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    const { supabase, user } = await getUserOrThrow();
    const body: WishlistUpdateDto = await req.json();

    const { data, error } = await supabase
      .from("wishlists")
      .update({ title: body.title })
      .eq("id", Number(id))
      .eq("owner_id", user.id)
      .select()
      .single<Wishlist>();

    if (error) throw error;

    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Failed to update" }, { status: 400 });
  }
}
