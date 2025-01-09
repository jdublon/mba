import { FC } from "react";
import Image from "next/image";
import { IconLabelProps } from "@/types";

export const IconLabel: FC<IconLabelProps> = ({ icon, label }) => (
  <div className="flex items-center">
    <Image
      src={`/icons/${icon}.svg`}
      alt={icon}
      width={16}
      height={16}
      className="mr-[0.5rem]"
    />
    <span className="text-white text-[0.75rem] sm:text-[0.875rem] font-extrabold font-sans leading-[1rem] sm:leading-[1.125rem] tracking-[-0.015rem] sm:tracking-[-0.0175rem] font-sans uppercase">
      {label}
    </span>
  </div>
);
