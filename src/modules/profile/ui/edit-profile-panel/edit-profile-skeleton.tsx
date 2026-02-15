"use client";

import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardFooter } from "@/shared/ui/card";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/shared/ui/field";
import { RequiredMark } from "@/shared/ui/required-marl";
import { Skeleton } from "@/shared/ui/skeleton";

export const EditProfileSkeleton = () => {
  return (
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
                <Skeleton className="h-9" />
              </Field>

              <Field>
                <FieldLabel htmlFor="birthDate">Дата рождения</FieldLabel>

                <Skeleton className="h-9" />
              </Field>
            </div>

            <Field>
              <FieldLabel htmlFor="description">Описание</FieldLabel>
              <Skeleton className="h-16" />
            </Field>
          </FieldGroup>
        </FieldSet>
      </CardContent>
      <CardFooter className="justify-end">
        <Button disabled={true} size={"lg"}>
          Сохранить
        </Button>
      </CardFooter>
    </Card>
  );
};
