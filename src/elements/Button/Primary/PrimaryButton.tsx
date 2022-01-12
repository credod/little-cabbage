import React from "react";
import BaseButton from "../BaseButton";
import { ButtonProps } from "../ButtonTypes";

const PrimaryButton = ({ children }: ButtonProps): JSX.Element => (
  <BaseButton backgroundColor="yellow" color="red" px="16px" py="12px">
    {children}
  </BaseButton>
);

export default PrimaryButton;
