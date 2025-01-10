import { DepartureCardProps } from "@/types";
import { FC } from "react";

// TO DO: derive end date from product duration
// TO DO: format dates and improve styling

export const DepartureCard: FC<DepartureCardProps> = ({ departure }) => {
  const textStyles = "font-sans text-primary-green text-sm font-semibold";
  const availabilityText =
    departure.available_pax > 0
      ? "Spaces available"
      : "Sorry this trip is fully booked!";

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <div className="space-y-2">
        <div className={textStyles}>Start Date: {departure.start_date}</div>
        <div className={textStyles}>Price: £{`${departure.price}`}</div>
        <div className={textStyles}>Availability: {availabilityText}</div>
      </div>
    </div>
  );
};
