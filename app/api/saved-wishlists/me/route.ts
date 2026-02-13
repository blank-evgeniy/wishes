import { NextResponse } from "next/server";

import { getUserOrThrow } from "@/shared/utils/supabase/server";

export async function GET() {
  try {
    const { supabase, user } = await getUserOrThrow();

    const { data, error } = await supabase
      .from("saved_wishlists")
      .select(
        `
        id,
        created_at,
        wishlists (
          *,
          owner_id
        )
      `,
      )
      .eq("user_id", user.id);

    if (error) throw error;

    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Failed" }, { status: 400 });
  }
}
