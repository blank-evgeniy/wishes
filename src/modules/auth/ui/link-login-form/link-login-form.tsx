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
import { Field, FieldError, FieldLabel } from "@/shared/ui/field";
import { Input } from "@/shared/ui/input";
import { MailMessageAlert } from "@/shared/ui/mail-message-alert";
import { mapSupabaseErrorMessage } from "@/shared/utils/errors/map-supabase-error";

import { useLinkLogin } from "../../api/mutations";
import {
  LinkLoginSchema,
  linkLoginSchema,
} from "../../schema/link-login-schema";

export const LinkLoginForm = () => {
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);

  const { mutate: linkLogin, isPending, error } = useLinkLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LinkLoginSchema>({
    resolver: zodResolver(linkLoginSchema),
  });

  const onSubmit = (data: LinkLoginSchema) => {
    linkLogin(data.email, {
      onSuccess: () => {
        setSubmittedEmail(data.email);
      },
    });
  };

  const backendErrorMessage = error
    ? mapSupabaseErrorMessage(error.message)
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
          <MailMessageAlert
            submittedEmail={submittedEmail}
            note={"Мы отправили ссылку для входа на"}
          />
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
