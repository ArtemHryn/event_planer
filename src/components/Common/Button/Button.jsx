import React from "react";
import { FilledBtn, OutlineBtn } from "./Button.styled";

const Button = ({ variant, children, ...props }) => {
  return (
    <>
      {variant === "filled" && <FilledBtn {...props}>{children}</FilledBtn>}
      {variant === "outline" && <OutlineBtn {...props}>{children}</OutlineBtn>}
    </>
  );
};

export default Button;
