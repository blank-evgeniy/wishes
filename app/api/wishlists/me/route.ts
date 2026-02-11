import { getUserOrThrow } from "@/shared/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { supabase, user } = await getUserOrThrow();

    const { data, error } = await supabase
      .from("wishlists")
      .select("*")
      .eq("owner_id", user.id);

    if (error) throw error;

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch wishlists" },
      { status: 400 },
    );
  }
}
