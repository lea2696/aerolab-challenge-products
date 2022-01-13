const axios = require("axios");
const config = require("../../config");

const getDollarPrice = async (req, next) => {
  const { page } = req.query;
  let response = {};
  try {
    response = await getDollarFromApi(page, next);
    if (response.status !== "200") {
    }
    response.data;
  } catch (err) {
    next(err);
  }

  return response;
};

const getDollarFromApi = async (page, next) => {
  try {
    const url = `${config.api}/dollar`;
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    //console.log(err.response)
    if (err.response) {
      throw err;
    }
  }
};

module.exports = { getDollarPrice, getDollarFromApi };
