import React, { createContext, useState, useReducer, useEffect } from "react";
import { cartReducer } from "../reducers/cartReducer";
import { totalReducer } from "../reducers/totalReducer";
import { useSession } from "../utils/useSessionStorage";
export const AppContext = createContext();

const { Provider } = AppContext;

export const AppProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useReducer(cartReducer, []);
  const [cachedProducts, setCachedProducts] = useSession("cachedProducts", []);
  const [cachedShoppingCart, setCachedShoppingCart] = useSession(
    "cachedShoppingCart",
    []
  );

  const [total, setTotal] = useReducer(totalReducer, 0);

  const updateShoppingCart = (product, action) => {
    const { price } = product;
    setShoppingCart({ product, ...action });
    setTotal({ price, ...action });
  };

  const updateProducts = (newProducts) => {
    const mergeProducts = [...products, ...newProducts];
    const uniqueProducts = [...new Set(mergeProducts)];
    setProducts(uniqueProducts);
    setCachedProducts(uniqueProducts);
  };

  useEffect(() => {
    if (cachedProducts.length) {
      setProducts(cachedProducts);
    }
    if (cachedShoppingCart) {
      cachedShoppingCart.forEach((e) => {
        if (e && e?.id) {
          setShoppingCart({ type: "add", product: e });
          setTotal({ price: e.price, type: "add" });
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (shoppingCart.length) {
      setCachedShoppingCart(shoppingCart);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shoppingCart]);

  return (
    <Provider
      value={{
        products,
        shoppingCart,
        updateShoppingCart,
        updateProducts,
        total,
        cachedProducts,
        cachedShoppingCart,
      }}
    >
      {props.children}
    </Provider>
  );
};
