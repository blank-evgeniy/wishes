"use client";
import { supabase } from "@/shared/utils/supabase/client";
import { useMutation } from "@tanstack/react-query";

export const useLinkLogin = () =>
  useMutation({
    mutationFn: async (email: string) => {
      const { data, error } = await supabase.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: location.origin },
      });
      if (error) throw error;
      return data;
    },
  });
