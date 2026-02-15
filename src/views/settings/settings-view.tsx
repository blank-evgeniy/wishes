"use client";

import dynamic from "next/dynamic";

import { LogoutAction } from "@/modules/auth";
import { EditProfilePanel } from "@/modules/profile";
import { Card, CardContent } from "@/shared/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/shared/ui/field";
import { Skeleton } from "@/shared/ui/skeleton";

import { SettingsViewBreadcrumbs } from "./ui/settings-view-breadcrumbs";

const ModeSelect = dynamic(() => import("@/shared/ui/mode-select"), {
  ssr: false,
  loading: () => <Skeleton className="h-9" />,
});

export const SettingsView = () => (
  <main className="flex flex-col gap-8">
    <SettingsViewBreadcrumbs />

    <EditProfilePanel />

    <Card>
      <CardContent>
        <FieldGroup>
          <Field>
            <FieldLabel>Тема сайта</FieldLabel>
            <ModeSelect />
          </Field>
        </FieldGroup>
      </CardContent>
    </Card>

    <LogoutAction className="w-fit ml-auto" />
  </main>
);
