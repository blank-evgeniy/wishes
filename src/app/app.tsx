import { Toaster } from "sonner";

import { AuthProvider } from "@/context/auth-context";

import { createClient } from "@/shared/utils/supabase/server";
import { TooltipProvider } from "@/shared/ui/tooltip";

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
          <TooltipProvider>
            <div className="min-h-dvh flex flex-col">{children}</div>
          </TooltipProvider>
          <Toaster />
        </QueryProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};
