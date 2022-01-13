import React from "react";
import {
  ButtonShopping,
  ButtonCardContainer,
  Number,
} from "./ButtonCard.styles";

const ButtonCard = ({ amount, handleUp, handleDown, text }) => {
  return (
    <ButtonCardContainer>
      {!amount ? (
        <ButtonShopping
          onClick={() => {
            handleUp();
          }}
        >
          {text}
        </ButtonShopping>
      ) : (
        <Number>
          <img
            alt="down"
            src={require("../../assets/CTA-small.png")}
            onClick={() => {
              handleDown();
            }}
          />
          <span>{amount}</span>
          <img
            alt="up"
            src={require("../../assets/CTA-small.png")}
            onClick={() => {
              handleUp();
            }}
          />
        </Number>
      )}
    </ButtonCardContainer>
  );
};

export default ButtonCard;
