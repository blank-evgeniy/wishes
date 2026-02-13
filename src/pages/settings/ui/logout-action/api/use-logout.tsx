import { useMutation } from "@tanstack/react-query";

import { supabase } from "@/shared/utils/supabase/client";

export const useLogout = () =>
  useMutation({
    mutationFn: async () => {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      return true;
    },
  });
