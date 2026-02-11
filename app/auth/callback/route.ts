import { NextResponse } from "next/server";
import { createClient } from "@/shared/utils/supabase/server";
import { routes } from "@/shared/routes";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const token_hash = searchParams.get("token_hash");

  if (token_hash) {
    const supabase = await createClient();

    await supabase.auth.verifyOtp({
      token_hash: token_hash,
      type: "email",
    });
  }

  return NextResponse.redirect(new URL(routes.home, request.url));
}
