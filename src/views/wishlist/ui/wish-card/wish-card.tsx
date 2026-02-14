import { WishlistItem } from "@/shared/api/types";
import { WishCardTemplate } from "@/templates/wish-card-template";

import { WishActions } from "./wish-actions";

interface WishCardProps {
  data: WishlistItem;
}

export const WishCard = ({ data }: WishCardProps) => {
  const { image_url, note, price, title, url } = data;

  return (
    <WishCardTemplate>
      <WishActions wish={data} className="absolute top-4 right-4 z-10" />
      <WishCardTemplate.Cover imageUrl={image_url} title={title} />

      <WishCardTemplate.Header title={title} price={price} note={note} />

      <WishCardTemplate.Footer url={url} />
    </WishCardTemplate>
  );
};
