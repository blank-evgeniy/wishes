import { Toaster } from "sonner";

import { AuthProvider } from "@/context/auth-context";
import { createClient } from "@/shared/utils/supabase/server";

import { ThemeProvider } from "./providers/theme-provider";
import { QueryProvider } from "./providers/query-provider";

import "./styles/globals.css";

export const App = async ({ children }: { children: React.ReactNode }) => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <ThemeProvider>
      <AuthProvider initialUser={user}>
        <QueryProvider>
          <div className="min-h-dvh flex">{children}</div>
          <Toaster />
        </QueryProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};
