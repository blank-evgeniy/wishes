import { Skeleton } from "@/shared/ui/skeleton";

import { WishlistActions } from "./wishlist-actions";
import { WishlistPageBreadcrumbs } from "./wishlist-page-breadcrumbs";

export const WishlistPageSkeleton = () => (
  <main className="flex flex-col gap-12">
    <header className="flex flex-col gap-8">
      <WishlistPageBreadcrumbs isLoading />

      <WishlistActions isLoading />
    </header>

    <div className="grid grid-cols-3 gap-8">
      {new Array(3).fill(0).map((_, i) => (
        <Skeleton key={i} className="h-80 w-full" />
      ))}
    </div>
  </main>
);
