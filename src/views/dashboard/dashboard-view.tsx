import { MyWishlists, SavedWishlists } from "@/modules/wishlist";

export const DashboardView = () => {
  return (
    <main className="flex flex-col gap-8">
      <MyWishlists />
      <SavedWishlists />
    </main>
  );
};
