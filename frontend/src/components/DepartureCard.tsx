import { DepartureCardProps } from "@/types";
import { FC } from "react";
import { getDepartureFields } from "@/helpers";

export const DepartureCard: FC<DepartureCardProps> = ({
  departure,
  duration,
}) => {
  const departureFields = getDepartureFields(departure, duration);

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      {departureFields.map((field) => (
        <div className="flex justify-between text-black" key={field.label}>
          <div className="w-1/2 font-sans font-semibold">{field.label}</div>
          <div className="w-1/2 font-sans">{field.value}</div>
        </div>
      ))}
    </div>
  );
};
