"use client";

import { useAuth } from "@/context/auth-context";
import { Badge } from "@/shared/ui/badge";

interface YourWishlistBadgeProps {
  ownerId: string;
  className?: string;
}

export const YourWishlistBadge = ({
  ownerId,
  className,
}: YourWishlistBadgeProps) => {
  const user = useAuth();

  if (user && user.id === ownerId)
    return <Badge className={className}>Ваш вишлист</Badge>;

  return null;
};
