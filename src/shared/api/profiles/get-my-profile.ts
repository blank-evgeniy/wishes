import { apiFetch } from "../client";
import { Profile } from "../types";

export function getMyProfile() {
  return apiFetch<Profile>(`/api/profiles/me`);
}
