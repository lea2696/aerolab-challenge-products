import React, { useContext } from "react";
import { HeaderStyle, Logo, Title } from "./Header.styles";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { AppContext } from "../../hooks/useContext";

const Header = ({ logo, title }) => {
  const state = useContext(AppContext);
  return (
    <HeaderStyle>
      <Title>
        <Logo src={require("../../assets/Combined Shape 2.png")} />
        <span className="bold-letter">{title.substring(0, 2)}</span>
        {title.substring(2, title.length)}
      </Title>
      <ShoppingCart />
    </HeaderStyle>
  );
};
export default Header;
