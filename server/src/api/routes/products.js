const { Router } = require("express");
const { handleSuccessResponse } = require("../../utils/ResponseHandler");
const { productsService } = require("../../services");
const router = Router();
router.get("/", async (req, res, next) => {
  try {
    res
      .status(200)
      .json(
        handleSuccessResponse(await productsService.getProducts(req, next))
      );
  } catch (error) {
    next(error.response);
  }
});

module.exports = router;
