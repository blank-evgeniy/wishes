import { useMutation } from "@tanstack/react-query";

import { updateProfile } from "@/shared/api/profiles/update-profile";
import { ProfileUpdateDto } from "@/shared/api/types";

export const useEditProfile = (id: string) => {
  return useMutation({
    mutationFn: (data: ProfileUpdateDto) => updateProfile(data, id),
  });
};
