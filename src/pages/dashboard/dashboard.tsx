import { MyWishlists } from "./ui/my-wishlists";
import { SavedWishlists } from "./ui/saved-wishlists";

export const DashboardPage = () => (
  <main className="flex flex-col gap-8">
    <MyWishlists />
    <SavedWishlists />
  </main>
);
