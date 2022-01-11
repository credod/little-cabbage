import React from "react";
import BaseBox from "./BaseBox";

interface BoxProps {
  children: React.ReactNode;
}

const Box = ({ children }: BoxProps) => {
  <BaseBox>{children}</BaseBox>;
};

export default Box;
