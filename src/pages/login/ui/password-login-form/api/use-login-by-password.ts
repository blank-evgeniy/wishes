"use client";

import { useMutation } from "@tanstack/react-query";

import { supabase } from "@/shared/utils/supabase/client";

export const useLoginByPassword = () =>
  useMutation({
    mutationFn: async (credentials: { email: string; password: string }) => {
      const { data, error } =
        await supabase.auth.signInWithPassword(credentials);

      if (error) throw error;
      return data;
    },
  });
