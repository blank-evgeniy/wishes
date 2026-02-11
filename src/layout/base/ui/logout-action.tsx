"use client";

import { Button } from "@/shared/ui/button";
import { useLogout } from "../api/use-logout";
import { useRouter } from "next/navigation";
import { routes } from "@/shared/routes";

export const LogoutAction = () => {
  const router = useRouter();

  const { mutate: signOut, isPending } = useLogout();

  const handleLogout = () => {
    signOut(undefined, {
      onSuccess: () => {
        router.push(routes.home);
      },
    });
  };

  return (
    <Button
      variant="outline"
      onClick={handleLogout}
      disabled={isPending}
      loading={isPending}
    >
      Выйти
    </Button>
  );
};
