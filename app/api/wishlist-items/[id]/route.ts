import { WishlistItem, WishlistItemUpdateDto } from "@/shared/api/types";
import { getUserOrThrow } from "@/shared/utils/supabase/server";
import { NextResponse } from "next/server";

export async function DELETE(
  _: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const { supabase } = await getUserOrThrow();

    const { error } = await supabase
      .from("wishlist_items")
      .delete()
      .eq("id", Number(id));

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
    const { supabase } = await getUserOrThrow();
    const body: WishlistItemUpdateDto = await req.json();

    const { data, error } = await supabase
      .from("wishlist_items")
      .update(body)
      .eq("id", Number(id))
      .select()
      .single<WishlistItem>();

    if (error) throw error;

    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Failed to update" }, { status: 400 });
  }
}

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const { supabase } = await getUserOrThrow();

    const { data, error } = await supabase
      .from("wishlist_items")
      .select("*")
      .eq("id", Number(id))
      .single<WishlistItem>();

    if (error) throw error;

    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 400 });
  }
}
