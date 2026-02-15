import { queryOptions } from "@tanstack/react-query";

import { getMyProfile } from "@/shared/api/profiles/get-my-profile";

export const profilesQueries = {
  baseKey: () => ["profiles"],

  meKey: () => [...profilesQueries.baseKey(), "me"],
  me: () =>
    queryOptions({
      queryKey: profilesQueries.meKey(),
      queryFn: () => getMyProfile(),
    }),
};
