const express = require("express");
const config = require("./server/src/config");
const products = require("./server/src/api/routes/products");
const categories = require("./server/src/api/routes/categories");
const dollar = require("./server/src/api/routes/dollar");
const {
  getAllProductsFromApi,
} = require("./server/src/services/products/getProducts");
const { handleError } = require("./server/src/utils/ResponseHandler");
const cron = require("node-cron");
const storage = require("node-persist");
const path = require("path");

async function startServer() {
  await storage.init();
  const app = express();
  app.use(express.static(path.resolve(__dirname, "../../client/build")));
  app.use("/api/products", products);
  app.use("/api/categories", categories);
  app.use("/api/dollar", dollar);
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../../client/build", "index.html"));
  });

  app.use(handleError);

  app.listen(config.port, (err) => {
    if (err) {
      console.log(`No se ha podido iniciar el servidor`);
      process.exit(1);
    }
    console.log(`Server listening in ${config.port}`);
  });
}
async function obtainedProductsInCache() {
  try {
    const allProducts = await getAllProductsFromApi();
    console.log("Productos guardados en cache");
    storage.setItem("cachedProducts", allProducts);
  } catch (err) {
    console.log(err);
  }
}
startServer();
obtainedProductsInCache();
cron.schedule("0 0 */12 * * *", function () {
  obtainedProductsInCache();
});
