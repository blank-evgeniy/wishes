import { apiFetch } from "../client";
import { Profile, ProfileUpdateDto } from "../types";

export function updateProfile(
  data: ProfileUpdateDto,
  id: string,
): Promise<Profile> {
  return apiFetch(`/api/profiles/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
}
