import { routes } from "@/shared/routes";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/shared/ui/breadcrumb";
import { Skeleton } from "@/shared/ui/skeleton";

interface WishlistPageBreadcrumbsProps {
  pageTitle?: string;
  isLoading?: boolean;
}

export const WishlistPageBreadcrumbs = ({
  pageTitle,
  isLoading,
}: WishlistPageBreadcrumbsProps) => (
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href={routes.dashboard}>Главная</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        {isLoading ? (
          <Skeleton className="h-7 w-20" />
        ) : (
          <BreadcrumbPage>{pageTitle}</BreadcrumbPage>
        )}
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
);
