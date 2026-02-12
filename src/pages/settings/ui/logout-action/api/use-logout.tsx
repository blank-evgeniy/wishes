import { supabase } from "@/shared/utils/supabase/client";
import { useMutation } from "@tanstack/react-query";

export const useLogout = () =>
  useMutation({
    mutationFn: async () => {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      return true;
    },
  });
