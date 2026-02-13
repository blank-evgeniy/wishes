"use client";

import { useRouter } from "next/navigation";

import { routes } from "@/shared/routes";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/shared/ui/alert-dialog";
import { Button } from "@/shared/ui/button";

import { useLogout } from "./api/use-logout";

export const LogoutAction = ({ className }: { className?: string }) => {
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
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="destructive"
          disabled={isPending}
          loading={isPending}
          className={className}
        >
          Выйти с аккаунта
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Вы уверены?</AlertDialogTitle>
          <AlertDialogDescription>
            Вы действительно хотите выйти из аккаунта?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant={"default"} disabled={isPending}>
            Отмена
          </AlertDialogCancel>
          <Button
            variant={"outline"}
            disabled={isPending}
            loading={isPending}
            onClick={handleLogout}
          >
            Выйти
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
