import { FrownIcon } from "lucide-react";

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/shared/ui/empty";

export const EmptyPublicWishlist = () => (
  <Empty>
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <FrownIcon />
      </EmptyMedia>
      <EmptyTitle>Этот вишлист пока что пуст</EmptyTitle>
      <EmptyDescription>
        Автор еще не добавил ни одного желания
      </EmptyDescription>
    </EmptyHeader>
  </Empty>
);
