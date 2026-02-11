"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "./styles/globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "./providers/theme-provider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    },
  },
});

export const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <div className="min-h-dvh flex">{children}</div>
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  );
};
