import { routes } from "@/shared/routes";
import { Button } from "@/shared/ui/button";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/shared/ui/empty";
import { FolderMinusIcon } from "lucide-react";
import Link from "next/link";

interface EmptyWishlistProps {
  id: number;
}

export const EmptyWishlist = ({ id }: EmptyWishlistProps) => (
  <Empty>
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <FolderMinusIcon />
      </EmptyMedia>
      <EmptyTitle>Ваш вишлист пока пуст</EmptyTitle>
      <EmptyDescription>Добавьте ваше первое желание</EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <Button asChild>
        <Link href={routes.createWish(id)}>Добавить желание</Link>
      </Button>
    </EmptyContent>
  </Empty>
);
