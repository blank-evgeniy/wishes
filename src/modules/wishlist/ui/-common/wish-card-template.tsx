import { SparkleIcon } from "lucide-react";

import { Button } from "@/shared/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";

interface WishCardTemplateProps {
  children: React.ReactNode;
}

const Root = ({ children }: WishCardTemplateProps) => {
  return (
    <Card className="relative mx-auto w-full pt-0 lg:pb-4 pb-2 lg:gap-4 gap-2 overflow-hidden flex flex-col rounded-3xl">
      {children}
    </Card>
  );
};

interface CoverProps {
  imageUrl?: string | null;
  title: string;
}

const Cover = ({ imageUrl, title }: CoverProps) => {
  return imageUrl ? (
    <img
      src={imageUrl}
      alt={`${title} фото`}
      className="aspect-square w-full object-cover brightness-80"
    />
  ) : (
    <div className="bg-muted aspect-square w-full flex items-center justify-center">
      <SparkleIcon className="size-1/3 text-primary" />
    </div>
  );
};

interface HeaderProps {
  title: string;
  price?: number | null;
  note?: string | null;
}

const Header = ({ title, price, note }: HeaderProps) => {
  return (
    <CardHeader className="lg:px-4 px-2">
      <CardTitle className="line-clamp-2 wrap-break-word leading-tight">
        {title}
      </CardTitle>

      {price && (
        <CardDescription className="text-lg text-primary truncate">
          {price} ₽
        </CardDescription>
      )}

      {note && (
        <CardDescription className="line-clamp-3 wrap-break-word">
          {note}
        </CardDescription>
      )}
    </CardHeader>
  );
};

interface FooterProps {
  url?: string | null;
}

const Footer = ({ url }: FooterProps) => {
  if (!url) return null;

  return (
    <CardFooter className="mt-auto lg:px-4 px-2">
      <Button className="w-full" asChild size={"sm"}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          Посмотреть
        </a>
      </Button>
    </CardFooter>
  );
};

export const WishCardTemplate = Object.assign(Root, {
  Cover,
  Header,
  Footer,
});
