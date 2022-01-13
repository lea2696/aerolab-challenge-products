import React, { useContext } from "react";
import { AppContext } from "../../hooks/useContext";
import { Price, ShoppingCartStyle, Cart } from "./ShoppingCart.styles";
const ShoppingCart = () => {
  const { shoppingCart, total } = useContext(AppContext);
  return (
    <ShoppingCartStyle>
      <Price>${Number(total).toFixed(2)}</Price>
      <Cart>
        <img
          alt="shopping-cart"
          src={require("../../assets/shopping-cart.png")}
        />
        <div className="circle">{shoppingCart.length}</div>
      </Cart>
    </ShoppingCartStyle>
  );
};
export default ShoppingCart;
