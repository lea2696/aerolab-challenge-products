import axios from "axios";

export const getProducts = async ({ pages }) => {
  const url = `${process.env.REACT_APP_API_PRODUCTS}/?page=${pages.pages}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    return {
      ok: false,
    };
  }
};
