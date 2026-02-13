import { SearchXIcon } from "lucide-react";
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

export default function NotFound() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia>
          <SearchXIcon />
        </EmptyMedia>
        <EmptyTitle>404 - Не найдено</EmptyTitle>
        <EmptyDescription>
          Страницы, которую вы ищите, не существует
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>
          <Link href={routes.home}>Вернуться на главную</Link>
        </Button>
      </EmptyContent>
    </Empty>
  );
}
