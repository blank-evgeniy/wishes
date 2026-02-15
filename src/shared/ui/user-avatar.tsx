import { UserIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

interface UserAvatarProps {
  src?: string | null;
  alt?: string;
  fallback?: string;
}

export const UserAvatar = ({ alt, src, fallback }: UserAvatarProps) => (
  <Avatar>
    {src && <AvatarImage src={src} alt={alt} className="grayscale" />}
    <AvatarFallback>
      {fallback ? fallback.slice(0, 1) : <UserIcon />}
    </AvatarFallback>
  </Avatar>
);
