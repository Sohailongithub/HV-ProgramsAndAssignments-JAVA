// Find Select Sort 
////setting up the express server
express = require("express");
//import the mongoose package
mongoose = require("mongoose");
//create the server
app = express();
app.use(express.json())
app.get("/", (req, res) => {
  res.send("Hello World");
});
//establish a connection
  mongoose.connect(
    "mongodb+srv://batch6:herovired@cluster0.aqifkg2.mongodb.net/Batch11"
  )
  .then(() => {
    console.log(" The database connection is succesfully established ");
  })
  .catch((error) => {
    console.log(" The error is ", error);
  });

//createion of the schema
//creation of the model/class

// Product Schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  stock: Number,
});
//schema method, it takes the schema object,
//the object has key value pairs.
//where the keys are the name of the field and the values are the typeof the field.
//create the Model.
const ProductModel = mongoose.model("Product", productSchema);
console.log("Model has been created");

app.post("/createProduct", async (req, res) => {
  //should be able to create a new document in the product collection
  product = new ProductModel(req.body);
  productResult = await product.save();
  if(productResult){
    res.send("Product has sent");
  }
});
///need to create a schema

//name, price, category and stock
///create a new product,
//find a product based on Product Name.
//update a product based product name,
//Delete a product
//always at the end of the code

//

app.get("/products", async (req, res) => {
  //find method
  products = await ProductModel.find();
  products = await ProductModel.findById();
  console.log(products);
  res.send(products);
});

app.listen(3000, () => {
    console.log("The server is listening to port 3000");
});

 
// find product based on ID and category 
// ID and Category should be passed as Params
// API to be created Item of specific category 
// And Sort API 
