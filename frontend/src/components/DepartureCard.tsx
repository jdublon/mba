import { DepartureCardProps } from "@/types";
import { FC } from "react";
import { addDays, format } from "date-fns";

// TO DO: improve styling

export const DepartureCard: FC<DepartureCardProps> = ({
  departure,
  duration,
}) => {
  const textStyles = "font-sans text-primary-green text-sm font-semibold";
  const availabilityText =
    departure.available_pax > 0
      ? "Spaces available"
      : "Sorry this trip is fully booked!";
  const formattedStartDate = format(
    new Date(departure.start_date),
    "do MMMM yyyy"
  );
  const endDate = format(
    addDays(new Date(departure.start_date), duration),
    "do MMMM yyyy"
  );

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <div className="space-y-2">
        <div className={textStyles}>Start Date: {formattedStartDate}</div>
        <div className={textStyles}>End Date: {endDate.toString()}</div>
        <div className={textStyles}>Price: £{`${departure.price}`}</div>
        <div className={textStyles}>Availability: {availabilityText}</div>
      </div>
    </div>
  );
};
