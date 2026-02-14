"use client";

import { useMutation } from "@tanstack/react-query";

import { supabase } from "@/shared/utils/supabase/client";

export const useRegister = () =>
  useMutation({
    mutationFn: async (credentials: { email: string; password: string }) => {
      const { data, error } = await supabase.auth.signUp({
        ...credentials,
        options: { emailRedirectTo: process.env.NEXT_PUBLIC_APP_URL },
      });

      if (error) throw error;
      return data;
    },
  });
