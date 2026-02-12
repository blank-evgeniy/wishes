import { useState } from "react";
import { Clipboard, Check } from "lucide-react";
import { Button, ButtonProps } from "./button";

interface CopyButtonProps extends ButtonProps {
  text: string;
  onCopy?: () => void;
}

export const CopyButton = ({
  text,
  onCopy,
  children,
  ...props
}: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      onCopy?.();
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <Button {...props} onClick={handleCopy}>
      {children}
      {copied ? <Check /> : <Clipboard />}
    </Button>
  );
};
