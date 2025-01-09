import { IconLabelProps } from "@/types";
import { FC } from "react";

export const MockIconLabel: FC<IconLabelProps> = ({ icon, label }) => (
  <div data-testid={icon}>{label}</div>
);
