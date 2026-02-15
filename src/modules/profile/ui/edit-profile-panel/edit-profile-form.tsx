"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardFooter } from "@/shared/ui/card";
import { DatePicker } from "@/shared/ui/date-picker";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/shared/ui/field";
import { Input } from "@/shared/ui/input";
import { RequiredMark } from "@/shared/ui/required-marl";
import { Textarea } from "@/shared/ui/textarea";

import { useEditProfile } from "../../api/mutations";
import { ProfileSchema, profileSchema } from "../../schema/profile-schema";

interface EditProfileFormProps {
  defaultValues: ProfileSchema;
  userId: string;
}

export const EditProfileForm = ({
  defaultValues,
  userId,
}: EditProfileFormProps) => {
  const { mutate, isPending } = useEditProfile(userId);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isDirty },
  } = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues,
  });

  const onSubmit = (data: ProfileSchema) => {
    mutate(
      {
        display_name: data.name,
        description: data.description,
        birth_date: data.birthDate?.toISOString().split("T")[0],
      },
      {
        onSuccess: () => {
          reset(data);

          toast.success("Профиль успешно обновлен");
        },
      },
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardContent>
          <FieldSet>
            <FieldLegend>Редактирование профиля</FieldLegend>

            <FieldGroup>
              <div className="flex gap-7 lg:flex-row flex-col">
                <Field>
                  <FieldLabel htmlFor="name">
                    Отображаемое имя
                    <RequiredMark />
                  </FieldLabel>
                  <Input
                    id="name"
                    autoComplete="off"
                    {...register("name")}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <FieldError>{errors.name.message}</FieldError>
                  )}
                </Field>

                <Field>
                  <FieldLabel htmlFor="birthDate">Дата рождения</FieldLabel>

                  <Controller
                    name="birthDate"
                    control={control}
                    rules={{ required: "Выберите дату" }}
                    render={({ field }) => (
                      <DatePicker
                        date={field.value}
                        onChange={field.onChange}
                        required={true}
                        disabled={(date) => date > new Date()}
                      />
                    )}
                  />

                  {errors.birthDate && (
                    <FieldError>{errors.birthDate.message}</FieldError>
                  )}
                </Field>
              </div>

              <Field>
                <FieldLabel htmlFor="description">Описание</FieldLabel>
                <Textarea
                  id="description"
                  autoComplete="off"
                  {...register("description")}
                  aria-invalid={!!errors.description}
                />
                {errors.description && (
                  <FieldError>{errors.description.message}</FieldError>
                )}
              </Field>
            </FieldGroup>
          </FieldSet>
        </CardContent>
        <CardFooter className="justify-end">
          <Button
            type="submit"
            disabled={isPending || !isDirty}
            loading={isPending}
            size={"lg"}
          >
            Сохранить
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};
