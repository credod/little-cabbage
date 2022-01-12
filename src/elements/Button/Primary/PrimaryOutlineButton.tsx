import React from "react";
import BaseButton from "../BaseButton";
import { ButtonProps } from "../ButtonTypes";

const PrimaryOutlineButton = ({ children }: ButtonProps): JSX.Element => (
  <BaseButton
    borderColor="yellow"
    backgroundColor="transparent"
    color="yellow"
    px="16px"
    py="12px"
  >
    {children}
  </BaseButton>
);

export default PrimaryOutlineButton;
