import { Departure, DepartureFields } from "@/types";
import { addDays, format } from "date-fns";

export const getDepartureFields = (
  departure: Departure,
  duration: number
): DepartureFields[] => {
  const formattedStartDate = format(
    new Date(departure.start_date),
    "do MMM yyyy"
  );
  const endDate = format(
    addDays(new Date(departure.start_date), duration),
    "do MMM yyyy"
  );

  const price = `£${departure.price.slice(0, -3)}`;

  const availability =
    departure.available_pax > 0
      ? "Spaces available"
      : "Sorry this trip is fully booked!";

  return [
    { label: "Start Date:", value: formattedStartDate },
    { label: "End Date:", value: endDate },
    { label: "Price:", value: price },
    { label: "Availability:", value: availability },
  ];
};
