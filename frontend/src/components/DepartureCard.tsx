import { DepartureCardProps } from "@/types";
import { FC } from "react";
import { getDepartureDates } from "@/helpers/getDepartureDates";

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

  const { startDate, endDate } = getDepartureDates(
    departure.start_date,
    duration
  );

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <div className="space-y-2">
        <div className={textStyles}>Start Date: {startDate}</div>
        <div className={textStyles}>End Date: {endDate}</div>
        <div className={textStyles}>Price: £{`${departure.price}`}</div>
        <div className={textStyles}>Availability: {availabilityText}</div>
      </div>
    </div>
  );
};
