const axios = require("axios");
const config = require("../../config");

const getCategories = async (req, next) => {
  const { page } = req.query;
  let response = {};
  try {
    response = await getCategoriesFromApi(page, next);
    if (response.status !== "200") {
    }
    response.data;
  } catch (err) {
    next(err);
  }

  return response;
};

const getCategoriesFromApi = async (page, next) => {
  try {
    const url = `${config.api}/categories`;
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    //console.log(err.response)
    if (err.response) {
      throw err;
    }
  }
};

module.exports = {
  getCategories,
};
