"use client";

import { useTheme } from "next-themes";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";

export const ModeSelect = () => {
  const { setTheme, theme } = useTheme();

  const handleSelect = (value: string) => {
    setTheme(value);
  };

  return (
    <Select value={theme} onValueChange={handleSelect}>
      <SelectTrigger className="w-40">
        <SelectValue placeholder="Тема" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="light">Светлая</SelectItem>
          <SelectItem value="dark">Темная</SelectItem>
          <SelectItem value="system">Системная</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default ModeSelect;
