const productsService = require("./products.service");

async function productExists(req, res, next) {
  const { productId } = req.params;
  const data = await productsService.read(productId);
  if (data) {
    res.locals.product = data;
    return next();
  } else {
    next({
      status: 404,
      message: "Product cannot be found",
    });
  }
}

// async function example
async function read(req, res, next) {
  const product = res.locals.product;
  await res.json({ product });
}

// async code example
function list(req, res, next) {
  productsService
    .list()
    .then((data) => res.json({ data }))
    .catch(next);
}

module.exports = {
  read: [productExists, read],
  list: [list],
};
