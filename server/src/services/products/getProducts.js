const axios = require("axios");
const config = require("../../config");
const { getDollarFromApi } = require("../../services/dollar/getDolllarPrice");
const storage = require("node-persist");
const moment = require("moment");

const getProducts = async (req, next) => {
  let response = {};
  const productsCache = await storage.getItem("cachedProducts");
  try {
    if (productsCache.length) {
      response = productsCache;
    } else {
      response = await getAllProductsFromApi(next);
    }

    response = await addDollarPrice(response);
    response = filterProductsByDate(response);
  } catch (err) {
    next(err);
  }

  return response;
};

const getAllProductsFromApi = async (page, next) => {
  let response;
  try {
    const url = `${config.slowApi}/products`;
    response = await axios.get(url);
    const { per_page, page, page_count } = response.data;

    let arr = Array.from(Array(page_count).keys()).map((x) => x + 1);
    const promises = [];
    let i = 1;

    for (let index of arr) {
      await promises.push(getProductsWithPage(Number(index)));
      i++;
    }
    let response2 = await Promise.all(promises);

    if (response2.length) {
      const allProducts = response2.map((res) => res.data.products);
      const mergeProducts = Array.prototype.concat.apply([], allProducts);

      return mergeProducts;
    }

    return response.data;
  } catch (err) {
    console.log(err);
    if (err.response) {
      next(err);
    }
  }
};

const getProductsWithPage = async (page) => {
  const url = `${config.api}/products?page=${page}`;
  return await axios.get(url);
};

const addDollarPrice = async (products) => {
  const price = await getDollarFromApi();
  const updateProducts = products.map((obj) => ({
    ...obj,
    priceDollar: Number(obj.price / price.rate).toFixed(2),
  }));
  return updateProducts;
};

const filterProductsByDate = (products) => {
  const appValidDate = moment().subtract(1, "month");
  return products.filter((product) => {
    if (!product.updatedAt) return false;
    const productUpdate = moment(product.updatedAt);
    return productUpdate.isAfter(appValidDate);
  });
};

module.exports = {
  getProducts,
  getAllProductsFromApi,
};
