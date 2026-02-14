"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

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
import { MailMessageAlert } from "@/shared/ui/mail-message-alert";

import { useRegister } from "../../api/mutations";
import { RegisterSchema, registerSchema } from "../../schema/register-schema";

export const RegisterForm = () => {
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);

  const { mutate: createAccount, isPending } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterSchema) => {
    createAccount(
      {
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: () => {
          setSubmittedEmail(data.email);
        },
      },
    );
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Создание аккаунта</CardTitle>
        <CardDescription>
          Введите почту и пароль для создания аккаунта.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {submittedEmail && (
          <MailMessageAlert
            submittedEmail={submittedEmail}
            note={"Мы отправили ссылку для подтверждения почты на"}
          />
        )}
        <form onSubmit={handleSubmit(onSubmit)} id="login-form">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email">Почта</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="example@mail.com"
                aria-invalid={!!errors.email}
                autoComplete="email"
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
                autoComplete="new-password"
                {...register("password")}
              />
              {errors.password && (
                <FieldError>{errors.password.message}</FieldError>
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="password-repeat">
                Повторите пароль
              </FieldLabel>
              <Input
                id="password-repeat"
                type="password"
                placeholder="Введите пароль"
                aria-invalid={!!errors.confirmPassword}
                autoComplete="new-password"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <FieldError>{errors.confirmPassword.message}</FieldError>
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
          Создать аккаунт
        </Button>
      </CardFooter>
    </Card>
  );
};
