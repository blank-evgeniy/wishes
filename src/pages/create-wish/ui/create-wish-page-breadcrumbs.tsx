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

interface CreateWishPageBreadcrumbsProps {
  wishlistTitle: string;
  wishlistId: number;
  isLoading: boolean;
}

export const CreateWishPageBreadcrumbs = ({
  wishlistTitle,
  wishlistId,
  isLoading,
}: CreateWishPageBreadcrumbsProps) => (
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
        <BreadcrumbPage>Новое</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
);
