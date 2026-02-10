import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";
import { Input } from "@/shared/ui/input";
import { supabase } from "@/shared/utils/supabase/client";
import { useState } from "react";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);

    await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${location.origin}`,
      },
    });

    setLoading(false);
  };

  return (
    <Container>
      <main className="flex gap-4 items-center justify-center my-4">
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />
        <Button onClick={handleLogin} disabled={loading}>
          {loading ? "Загрузка..." : "Войти"}
        </Button>
      </main>
    </Container>
  );
};
