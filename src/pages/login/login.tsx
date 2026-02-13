import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";

import { LinkLoginForm } from "./ui/link-login-form";
import { PasswordLoginForm } from "./ui/password-login-form";

export const LoginPage = () => {
  return (
    <main className="flex flex-col items-center lg:mt-20 mt-12">
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
