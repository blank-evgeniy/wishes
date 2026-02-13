"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { routes } from "@/shared/routes";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/shared/ui/field";
import { Input } from "@/shared/ui/input";

import { useLoginByPassword } from "./api/use-login-by-password";
import { LoginByPasswordSchema, loginByPasswordSchema } from "./model/schema";
import { mapPasswordLoginErrorMessage } from "./model/utils";

export const PasswordLoginForm = () => {
  const router = useRouter();

  const { mutate: login, isPending, error } = useLoginByPassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginByPasswordSchema>({
    resolver: zodResolver(loginByPasswordSchema),
  });

  const onSubmit = (data: LoginByPasswordSchema) => {
    login(data, {
      onSuccess: () => router.replace(routes.dashboard),
    });
  };

  const backendErrorMessage = error
    ? mapPasswordLoginErrorMessage(error.message)
    : null;

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Вход в аккаунт</CardTitle>
        <CardDescription>
          Введите почту и пароль для входа в аккаунт.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <form onSubmit={handleSubmit(onSubmit)} id="login-form">
          <FieldGroup>
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
            </Field>

            <Field>
              <FieldLabel htmlFor="password">Пароль</FieldLabel>
              <Input
                id="password"
                type="password"
                placeholder="Введите пароль"
                aria-invalid={!!errors.password}
                {...register("password")}
              />
              {errors.password && (
                <FieldError>{errors.password.message}</FieldError>
              )}
              {backendErrorMessage && (
                <FieldError>{backendErrorMessage}</FieldError>
              )}
            </Field>
          </FieldGroup>
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
