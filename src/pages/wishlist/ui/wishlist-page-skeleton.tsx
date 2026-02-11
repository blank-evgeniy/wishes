import { Button } from "@/shared/ui/button";
import { WishlistPageBreadcrumbs } from "./wishlist-page-breadcrumbs";
import { PencilIcon, PlusIcon, TrashIcon } from "lucide-react";
import { Skeleton } from "@/shared/ui/skeleton";

export const WishlistPageSkeleton = () => (
  <main className="flex flex-col gap-12">
    <header className="flex flex-col gap-8">
      <WishlistPageBreadcrumbs isLoading />

      <div className="flex gap-4">
        <Button disabled>
          Новое желание <PlusIcon />
        </Button>

        <Button variant={"outline"} disabled>
          Изменить название <PencilIcon />
        </Button>

        <Button variant={"destructive"} className="ml-auto" disabled>
          Удалить вишлист <TrashIcon />
        </Button>
      </div>
    </header>

    <div className="grid grid-cols-3 gap-8">
      {new Array(3).fill(0).map((_, i) => (
        <Skeleton key={i} className="h-80 w-full" />
      ))}
    </div>
  </main>
);
