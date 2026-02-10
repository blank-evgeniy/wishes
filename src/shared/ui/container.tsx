import { cn } from "../utils/cn";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("max-w-5xl w-full mx-auto px-4", className)}>
    {children}
  </div>
);
