import "./styles/globals.css";

import { Toaster } from "sonner";

import { AuthProvider } from "@/modules/auth";
import { TooltipProvider } from "@/shared/ui/tooltip";
import { createClient } from "@/shared/utils/supabase/server";

import { QueryProvider } from "./providers/query-provider";
import { ThemeProvider } from "./providers/theme-provider";

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
