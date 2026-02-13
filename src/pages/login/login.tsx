import Link from "next/link";

import { routes } from "@/shared/routes";
import { Button } from "@/shared/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";

import { LinkLoginForm } from "./ui/link-login-form";
import { PasswordLoginForm } from "./ui/password-login-form";

export const LoginPage = () => {
  return (
    <main className="flex-1 flex flex-col items-center p-4 gap-8 mt-20">
      <Button asChild variant={"ghost"} size={"xl"} className="font-semibold">
        <Link href={routes.home}>Wishes</Link>
      </Button>

      <Tabs defaultValue="password" className="max-w-md w-full">
        <TabsList className="w-full">
          <TabsTrigger value="password">По паролю</TabsTrigger>
          <TabsTrigger value="link">По ссылке</TabsTrigger>
        </TabsList>
        <TabsContent value="password">
          <PasswordLoginForm />
        </TabsContent>
        <TabsContent value="link">
          <LinkLoginForm />
        </TabsContent>
      </Tabs>
    </main>
  );
};
