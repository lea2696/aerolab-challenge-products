import React from "react";
import { ButtonStyle } from "./Button.styles";

const Button = ({ text, handleClick }) => {
  return <ButtonStyle onClick={handleClick}>{text}</ButtonStyle>;
};

export default Button;
