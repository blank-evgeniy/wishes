import { WishlistItem } from "@/shared/api/types";

import { WishCardTemplate } from "../-common/wish-card-template";

interface PublicWishCardProps {
  data: WishlistItem;
}

export const PublicWishCard = ({ data }: PublicWishCardProps) => {
  const { image_url, note, price, title, url } = data;

  return (
    <WishCardTemplate>
      <WishCardTemplate.Cover imageUrl={image_url} title={title} />

      <WishCardTemplate.Header title={title} price={price} note={note} />

      <WishCardTemplate.Footer url={url} />
    </WishCardTemplate>
  );
};
