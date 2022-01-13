import React, { useState, useEffect, useContext } from "react";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import { getProducts } from "./api/getProducts";
import { CardContainer } from "../components/CardContainer/CardContainer.js";
import Button from "../components/Button/Button";
import { AppContext } from "../hooks/useContext";

const Home = () => {
  const [pageApi, setPageApi] = useState(1);
  const [showMoreButton, setShowMoreButton] = useState(true);

  const { products, updateProducts, cachedProducts } = useContext(AppContext);

  const renderProducts = () => {
    if (products.length) {
      return (
        <CardContainer title="Almacén">
          {products.map((e, i) => {
            return <Card key={`${e.id}${i}`} {...e} />;
          })}
        </CardContainer>
      );
    }
  };

  const fetchData = async (page) => {
    let r = await getProducts({ pages: page });
    setPageApi(r.page + 1);
    setShowMoreButton(r.page_count - r.page > 0);
    if (r.products.length) {
      updateProducts(r.products);
    }
  };

  const getMoreData = async () => {
    if (showMoreButton) {
      setPageApi((prevPage) => prevPage + 1);
      await fetchData({ pages: pageApi });
    }
  };

  useEffect(() => {
    if (!cachedProducts.length) {
      fetchData({ pages: pageApi });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header title="Ezshop"></Header>
      {renderProducts()}
      {showMoreButton ? (
        <Button text="Cargar más productos" handleClick={getMoreData} />
      ) : null}
    </div>
  );
};
export default Home;
