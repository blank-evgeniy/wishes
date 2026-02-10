"use client";

import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";
import { supabase } from "@/shared/utils/supabase/client";

export const DashboardPage = () => {
  const signOut = () => {
    supabase.auth.signOut();
  };

  return (
    <Container>
      <main className="flex gap-4 items-center justify-center my-4">
        <Button onClick={signOut}>Выйти</Button>
      </main>
    </Container>
  );
};
