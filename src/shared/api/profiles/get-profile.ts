import { apiFetch } from "../client";
import { Profile } from "../types";

export function getProfile(id: number) {
  return apiFetch<Profile>(`/api/profiles/${id}`);
}
