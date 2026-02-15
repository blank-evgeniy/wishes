import { NextResponse } from "next/server";

import { Profile } from "@/shared/api/types";
import { getUserOrThrow } from "@/shared/utils/supabase/server";

export async function GET() {
  try {
    const { supabase, user } = await getUserOrThrow();

    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single<Profile>();

    if (error) throw error;

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch profile" },
      { status: 400 },
    );
  }
}
