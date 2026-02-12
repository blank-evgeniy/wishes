"use client";

import { Field, FieldGroup, FieldLabel } from "@/shared/ui/field";
import { SettingsPageBreadcrumbs } from "./ui/settings-page-breadcrumbs";
import { LogoutAction } from "./ui/logout-action";
import dynamic from "next/dynamic";
import { Skeleton } from "@/shared/ui/skeleton";

const ModeSwitcher = dynamic(() => import("./ui/mode-switcher"), {
  ssr: false,
  loading: () => <Skeleton className="h-9" />,
});

export const SettingsPage = () => (
  <main className="flex flex-col gap-12">
    <SettingsPageBreadcrumbs />

    <div className="flex flex-col gap-8">
      <FieldGroup>
        <Field>
          <FieldLabel>Тема сайта</FieldLabel>
          <ModeSwitcher />
        </Field>
      </FieldGroup>

      <LogoutAction className="w-fit" />
    </div>
  </main>
);
