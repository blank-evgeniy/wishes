export const routes = {
  home: "/",
  login: "/auth/login",
  authCallback: "/auth/callback",
  dashboard: "/app",
  createWishlist: "/app/create-wishlist",
  wishlist: (id: number) => `/app/wishlist/${id}`,
  profile: "/app/me",
};
