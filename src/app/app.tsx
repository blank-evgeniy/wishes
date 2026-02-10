"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "./styles/globals.css";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

export const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <div className="min-h-dvh flex">{children}</div>
      <Toaster />
    </QueryClientProvider>
  );
};
