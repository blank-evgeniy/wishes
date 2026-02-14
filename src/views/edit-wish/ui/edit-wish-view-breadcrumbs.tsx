import { routes } from "@/shared/routes";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/ui/breadcrumb";
import { Skeleton } from "@/shared/ui/skeleton";

interface EditWishViewBreadcrumbsProps {
  wishlistId: number;
  wishlistTitle?: string;
  isLoading?: boolean;
}

export const EditWishViewBreadcrumbs = ({
  wishlistTitle,
  wishlistId,
  isLoading,
}: EditWishViewBreadcrumbsProps) => (
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href={routes.dashboard}>Главная</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        {isLoading ? (
          <Skeleton className="h-6 w-20" />
        ) : (
          <BreadcrumbLink href={routes.wishlist(wishlistId)}>
            {wishlistTitle}
          </BreadcrumbLink>
        )}
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Редактировать</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
);
