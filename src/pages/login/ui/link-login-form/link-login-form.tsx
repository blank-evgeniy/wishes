"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2Icon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Alert, AlertDescription, AlertTitle } from "@/shared/ui/alert";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { Field, FieldError, FieldLabel } from "@/shared/ui/field";
import { Input } from "@/shared/ui/input";

import { useLinkLogin } from "./api/use-link-login";
import { LoginByLinkSchema, loginByLinkSchema } from "./model/schema";
import { getMailProviderLink, mapLinkLoginErrorMessage } from "./model/utils";

export const LinkLoginForm = () => {
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);

  const { mutate: linkLogin, isPending, error } = useLinkLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginByLinkSchema>({
    resolver: zodResolver(loginByLinkSchema),
  });

  const onSubmit = (data: LoginByLinkSchema) => {
    linkLogin(data.email, {
      onSuccess: () => {
        setSubmittedEmail(data.email);
      },
    });
  };

  const backendErrorMessage = error
    ? mapLinkLoginErrorMessage(error.message)
    : null;

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Вход в аккаунт</CardTitle>
        <CardDescription>
          Введите свою почту, и мы вышлем вам ссылку для входа в аккаунт.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {submittedEmail && (
          <Alert>
            <CheckCircle2Icon />
            <AlertTitle>Проверьте почту</AlertTitle>
            <AlertDescription>
              Мы отправили ссылку для входа на
              <a
                href={getMailProviderLink(submittedEmail)}
                target="_blank"
                rel="noreferrer"
                className="underline font-medium"
              >
                {submittedEmail}
              </a>
            </AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit(onSubmit)} id="login-form">
          <div className="flex flex-col gap-6">
            <Field>
              <FieldLabel htmlFor="email">Почта</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="example@mail.com"
                aria-invalid={!!errors.email}
                {...register("email")}
              />
              {errors.email && <FieldError>{errors.email.message}</FieldError>}
              {backendErrorMessage && !errors.email && (
                <FieldError>{backendErrorMessage}</FieldError>
              )}
            </Field>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button
          type="submit"
          className="w-full"
          form="login-form"
          disabled={isPending}
          loading={isPending}
        >
          Войти
        </Button>
      </CardFooter>
    </Card>
  );
};
