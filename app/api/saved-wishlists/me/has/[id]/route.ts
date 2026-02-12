import { getUserOrThrow } from "@/shared/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    const { supabase, user } = await getUserOrThrow();

    const { data, error } = await supabase
      .from("saved_wishlists")
      .select("*")
      .eq("user_id", user.id)
      .eq("wishlist_id", Number(id))
      .maybeSingle();

    if (error) throw error;

    return NextResponse.json({ has: !!data });
  } catch {
    return NextResponse.json({ error: "Failed" }, { status: 400 });
  }
}
