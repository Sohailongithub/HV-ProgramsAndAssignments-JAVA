const product = require("./prod");

const {addProducts, deleteproducts} = require("./addProducts")
console.log(product);

addProducts("limca", 250);
console.log(product);

deleteproducts('thums up', 45);
console.log(product);

