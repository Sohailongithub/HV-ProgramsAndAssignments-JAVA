const express = require("express");
const app = express();
products = [
  {
    name: "Coke",
    price: 35,
    category: "Soft Drinks",
  },
  {
    name: "Rice",
    price: 35,
    category: "groceries",
  },
  {
    name: "Books",
    price: 100,
    category: "learning",
  },
];

app.get("/", function (req, res) {
  res.send("Hello World");
});

//creating api for fetching all the products
app.get("/getAllProducts", function (req, res) {
  res.send(products);
});
app.get("/product/:name", function (req, res) {
  productName = req.params.name;
  findProduct = {};
  for (index = 0; index < products.length; index++) {
    if (products[index].name == productName) {
      findProduct = products[index];
      break;
    }
  }
  if (findProduct) {
    res.send(findProduct);
  }
  else
  {
    res.send("Product name not found")
  }
});

//the port that I am listening to is 3000
app.listen(3000, () => {
  console.log("The server is running in port 3000");
});
