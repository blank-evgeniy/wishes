import { MyWishlistActions } from "@/modules/wishlist";
import { Skeleton } from "@/shared/ui/skeleton";

import { WishlistViewBreadcrumbs } from "./wishlist-view-breadcrumbs";

export const WishlistViewSkeleton = () => (
  <main className="flex flex-col gap-12">
    <header className="flex flex-col gap-8">
      <WishlistViewBreadcrumbs isLoading />

      <MyWishlistActions isLoading />
    </header>

    <div className="grid md:grid-cols-4 grid-cols-2 sm:gap-8 gap-4">
      {new Array(3).fill(0).map((_, i) => (
        <Skeleton key={i} className="h-96 w-full" />
      ))}
    </div>
  </main>
);
