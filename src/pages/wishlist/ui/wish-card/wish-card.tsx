import { WishlistItem } from "@/shared/api/types";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { SparkleIcon } from "lucide-react";
import { WishActions } from "./wish-actions";

interface WishCardProps {
  data: WishlistItem;
}

export const WishCard = ({ data }: WishCardProps) => {
  const { image_url, note, price, title, url } = data;

  return (
    <Card className="relative mx-auto w-full pt-0 overflow-hidden">
      <WishActions wish={data} className="absolute top-4 right-4 z-10" />

      {image_url ? (
        <img
          src={image_url}
          alt={`${title} фото`}
          className="aspect-video w-full object-cover brightness-80"
        />
      ) : (
        <div className="bg-muted aspect-video w-full flex items-center justify-center">
          <SparkleIcon className="size-1/3 text-primary" />
        </div>
      )}

      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {price && (
          <CardDescription className="text-lg text-primary">
            {price} ₽
          </CardDescription>
        )}
        {note && (
          <CardDescription className="line-clamp-3 wrap-break-word">
            {note}
          </CardDescription>
        )}
      </CardHeader>
      {url && (
        <CardFooter className="mt-auto">
          <Button className="w-full" asChild>
            <a href={url} target="_blank" rel="noopener noreferrer">
              Посмотреть
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};
