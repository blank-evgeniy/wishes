"use client";

import { useQuery } from "@tanstack/react-query";

import { useAuth } from "@/modules/auth";

import { profilesQueries } from "../../api/profiles-queries";
import { EditProfileForm } from "./edit-profile-form";
import { EditProfileSkeleton } from "./edit-profile-skeleton";

export const EditProfilePanel = () => {
  const user = useAuth();

  const { data, isLoading } = useQuery(profilesQueries.me());

  if (isLoading) return <EditProfileSkeleton />;

  if (!user || !data) return null;

  return (
    <EditProfileForm
      defaultValues={{
        name: data.display_name,
        description: data.description || "",
        birthDate: data.birth_date ? new Date(data.birth_date) : undefined,
      }}
      userId={user.id}
    />
  );
};
