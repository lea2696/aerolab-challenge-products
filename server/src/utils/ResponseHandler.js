const handleSuccessResponse = (payload) => {
  return {
    error: false,
    message: "Ok",
    status: 200,
    payload,
  };
};
const handleError = (err, req, res, next) => {
  res.header("Content-Type", "application/json");
  res.status(err.status || 500).send(JSON.stringify(err, null, 4));
};

module.exports = {
  handleSuccessResponse,
  handleError,
};
