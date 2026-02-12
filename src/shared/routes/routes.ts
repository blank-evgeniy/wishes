export const routes = {
  home: "/",
  login: "/auth/login",
  authCallback: "/auth/callback",
  dashboard: "/app",
  createWish: (wishlistId: number) => `/app/wishlist/${wishlistId}/new`,
  editWish: ({ wishlistId, wishId }: { wishlistId: number; wishId: number }) =>
    `/app/wishlist/${wishlistId}/${wishId}`,
  wishlist: (id: number) => `/app/wishlist/${id}`,
  profile: "/app/me",
};
