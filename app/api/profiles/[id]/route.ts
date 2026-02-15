import { NextResponse } from "next/server";

import { Profile, ProfileUpdateDto } from "@/shared/api/types";
import { createClient, getUserOrThrow } from "@/shared/utils/supabase/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", id)
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

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const { supabase } = await getUserOrThrow();
    const body: ProfileUpdateDto = await req.json();

    const { data, error } = await supabase
      .from("profiles")
      .update({
        display_name: body.display_name,
        avatarSrc: body.avatarSrc,
        description: body.description,
        birth_date: body.birth_date,
      })
      .eq("id", id)
      .select()
      .single<Profile>();

    if (error) throw error;

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Failed to update profile" },
      { status: 400 },
    );
  }
}
