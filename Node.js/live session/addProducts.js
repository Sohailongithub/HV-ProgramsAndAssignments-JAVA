const product = require("./prod")
function addProducts(name, price) {
  product.push({ name: name, price: price });
}

function deleteproducts(name, price) {
  let prod = product.splice({name, price});
  return prod
}

module.exports= {addProducts, deleteproducts};