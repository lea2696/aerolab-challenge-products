const handleSuccessResponse = (payload) => {
    return {
        error: false,
        message: "Ok",
        status: 200,
        payload
    };
};
const handleError = (err, req, res, next) => {
    console.log(err);
    
  };


module.exports = {
    handleSuccessResponse,
    handleError
}