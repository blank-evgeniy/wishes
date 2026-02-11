export const routes = {
  home: "/",
  login: "/auth/login",
  authCallback: "/auth/callback",
  dashboard: "/app",
  createWish: (wishlist_id: number) => `/app/wishlist/${wishlist_id}/new`,
  wishlist: (id: number) => `/app/wishlist/${id}`,
  profile: "/app/me",
};
