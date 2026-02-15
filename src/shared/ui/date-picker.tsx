"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { Button } from "./button";
import { Calendar, CalendarProps } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { ru } from "date-fns/locale";

type DatePickerProps = {
  date?: Date;
  onChange: (date?: Date) => void;
} & Omit<CalendarProps, "mode" | "selected" | "onSelect">;

export function DatePicker({
  date,
  onChange,
  required = false,
  ...props
}: DatePickerProps) {
  function setDate(date?: Date) {
    onChange(date);
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          data-empty={!date}
          className="data-[empty=true]:text-muted-foreground w-70 justify-start text-left font-normal"
        >
          <CalendarIcon />
          {date ? (
            format(date, "PPP", { locale: ru })
          ) : (
            <span>Выберите дату</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          required={required}
          {...props}
        />
      </PopoverContent>
    </Popover>
  );
}
