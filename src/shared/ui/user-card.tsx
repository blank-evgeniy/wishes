import { UserAvatar } from "./user-avatar";

interface UserCardProps {
  avatar?: string | null;
  name: string;
}

export const UserCard = ({ name, avatar }: UserCardProps) => (
  <div className="flex gap-2 items-center">
    <UserAvatar src={avatar} alt={`${name} аватар`} />
    <span>{name}</span>
  </div>
);
