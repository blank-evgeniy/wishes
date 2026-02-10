"use client";

import { Button } from "@/shared/ui/button";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/shared/ui/card";
import { Field, FieldError, FieldLabel } from "@/shared/ui/field";
import { Input } from "@/shared/ui/input";
import { useForm } from "react-hook-form";
import { loginSchema, LoginSchema } from "../../model/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLinkLogin } from "../../api/use-link-login";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/shared/ui/alert";
import { CheckCircle2Icon } from "lucide-react";

export const LoginForm = () => {
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);

  const { mutate: linkLogin, isPending, error } = useLinkLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginSchema) => {
    linkLogin(data.email, {
      onSuccess: () => {
        setSubmittedEmail(data.email);
      },
    });
  };

  const getMailProviderLink = (email: string) => {
    if (email.endsWith("@gmail.com")) return "https://mail.google.com";
    if (email.endsWith("@yandex.ru") || email.endsWith("@yandex.com"))
      return "https://mail.yandex.com";
    return "https://mail.google.com";
  };

  const mapErrorMessage = (message: string) => {
    if (message.includes("email rate limit exceeded")) {
      return "Слишком много запросов. Пожалуйста, попробуйте снова через несколько минут.";
    }
    return null;
  };

  const backendErrorMessage = error ? mapErrorMessage(error.message) : null;

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
