import { addDays, format } from "date-fns";

export const getDepartureDates = (startDate: string, duration: number) => {
  const formattedStartDate = format(new Date(startDate), "do MMMM yyyy");
  const endDate = format(
    addDays(new Date(startDate), duration),
    "do MMMM yyyy"
  );

  return { startDate: formattedStartDate, endDate };
};
