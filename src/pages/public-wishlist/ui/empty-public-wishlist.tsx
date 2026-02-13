import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
} from "@/shared/ui/empty";
import { FrownIcon } from "lucide-react";

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
