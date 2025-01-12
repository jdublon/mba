import { FC } from "react";
import { TextBoxProps } from "@/types";

export const TextBox: FC<TextBoxProps> = ({
  text,
  textStyles,
  containerStyles,
}) => (
  <div className={containerStyles}>
    <p className={textStyles}>{text}</p>
  </div>
);
