import React from "react";
import {
  CardContainer as CardContainerStyle,
  Title,
} from "./CardContainer.styles";

export const CardContainer = ({ title, children }) => {
  return (
    <div>
      <Title>{title}</Title>
      <CardContainerStyle>{children}</CardContainerStyle>
    </div>
  );
};
