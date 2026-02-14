"use client";

import { useAuth } from "@/modules/auth";
import { Badge } from "@/shared/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui/tooltip";

interface YourWishlistBadgeProps {
  ownerId: string;
  className?: string;
}

export const YourWishlistBadge = ({
  ownerId,
  className,
}: YourWishlistBadgeProps) => {
  const user = useAuth();

  if (user && user.id === ownerId) {
    return (
      <Tooltip>
        <TooltipTrigger>
          <Badge className={className}>Ваш вишлист</Badge>
        </TooltipTrigger>
        <TooltipContent>
          <p>Так видят ваш вишлист другие пользователи</p>
        </TooltipContent>
      </Tooltip>
    );
  }

  return null;
};
