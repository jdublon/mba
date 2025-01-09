import { DepartureCardProps, HeroProps } from "@/types";
import { FC } from "react";

export const MockHero: FC<HeroProps> = ({ product }) => (
  <div>{product.name}</div>
);

export const MockDepartureCard: FC<DepartureCardProps> = ({ departure }) => (
  <div>{`departure card for product: ${departure.product}`}</div>
);
