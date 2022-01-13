import React, { useState, useEffect, useContext } from "react";
import ButtonCard from "../ButtonCard/ButtonCard";
import { AppContext } from "../../hooks/useContext";
import { Image, CardStyle, Price, CardName } from "./Card.styles";

const Card = (card) => {
  const [amount, setAmount] = useState(0);
  const { name, price, photo, originalPrice } = card;
  const context = useContext(AppContext);
  const oldPrice = originalPrice - price > 0;

  const handleUp = () => {
    setAmount((prevAmount) => prevAmount + 1);
    context.updateShoppingCart(card, { type: "add" });
  };
  const handleDown = () => {
    setAmount((prevAmount) => prevAmount - 1);
    context.updateShoppingCart(card, { type: "remove" });
  };

  useEffect(() => {
    if (context.cachedShoppingCart) {
      const a = context.cachedShoppingCart.filter(
        (product) => product.id === card.id
      ).length;
      setAmount(a);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <CardStyle>
        <Image src={photo} />
        <CardName>{name}</CardName>
        <Price>
          {oldPrice ? <span>${originalPrice}</span> : null}
          {amount ? ` ${amount}x` : null} ${Number(price).toFixed(2)}
        </Price>
        <ButtonCard
          handleUp={handleUp}
          handleDown={handleDown}
          amount={amount}
          text="Agregar al carrito"
        />
      </CardStyle>
    </>
  );
};
export default Card;
