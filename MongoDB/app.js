const express = require("express");
//creating the mongoose object
const mongoose = require("mongoose");

//connnecting to db
const app = express();

mongoose
  .connect(
    "mongodb+srv://batch6:herovired@cluster0.aqifkg2.mongodb.net/batch11"
  )
  .then(() => {
    console.log("connection established");
  });

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3000, () => {
  console.log("server started at 3000");
});
