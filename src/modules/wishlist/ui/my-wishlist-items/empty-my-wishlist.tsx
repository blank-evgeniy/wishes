import { FolderMinusIcon } from "lucide-react";
import Link from "next/link";

import { routes } from "@/shared/routes";
import { Button } from "@/shared/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/shared/ui/empty";

interface EmptyMyWishlistProps {
  id: number;
}

export const EmptyMyWishlist = ({ id }: EmptyMyWishlistProps) => (
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
