const { Router } = require("express");
const { handleSuccessResponse } = require("../../utils/ResponseHandler");
const { dollarService } = require("../../services");
const router = Router();
router.get("/", async (req, res, next) => {
  try {
    res
      .status(200)
      .json(
        handleSuccessResponse(await dollarService.getDollarPrice(req, next))
      );
  } catch (error) {
    next(error.response);
  }
});

module.exports = router;
