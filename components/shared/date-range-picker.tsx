"use client";

import * as React from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useFormContext } from "react-hook-form";

const DateRangePicker = ({
  className,
  dateRange,
  name,
}: {
  className?: React.HTMLAttributes<HTMLDivElement>;
  dateRange: (date: DateRange) => void;
  name: string;
}) => {
  const { formState } = useFormContext();
  const { errors } = formState || {};
  const [date, setDate] = React.useState<DateRange | undefined>();

  React.useEffect(() => {
    if (date) dateRange(date);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "h-10 bg-gray-200 text-gray-700 border border-gray-200 justify-start text-left font-normal ",
              !date && "text-muted-foreground",
              errors[name] && "border-red-500"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            disabled={{ before: new Date() }}
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
      <p className="text-red-500 text-xs italic transition-opacity ease-in duration-700 opacity-100 mt-2">
        {errors[name]?.message?.toString()}
      </p>
    </div>
  );
};

export default DateRangePicker;
