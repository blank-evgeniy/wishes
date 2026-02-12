import { createClient } from "@/shared/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const supabase = await createClient();
    const { id } = await params;

    const { data, error } = await supabase
      .from("wishlists")
      .select(
        `
        *,
        wishlist_items (*)
      `,
      )
      .eq("id", Number(id))
      .single();

    if (error) throw error;

    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}
