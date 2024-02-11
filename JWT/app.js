const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

app = express();
app.use(express.json());
const mongoURI = "mongodb+srv://batch6:herovired@cluster0.aqifkg2.mongodb.net/user_login";
const PORT = 3000;
const jwtSecret = "HeroviredClass";

//database connection
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log(" Connected to database");
  })
  .catch((error) => {
    console.log(error);
  });

  //userModel
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model("User", UserSchema);

//Login 
app.post("/login", async (req, res) => {
  //comparing the userid and the password
  //validate the username, get the password
  //compare the password
  //if its true, generate the JWT token
  //and send it
  try {
    const { username, password } = req.body;
    //validate the user
    const user = await userModel.findOne({ username });
    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        //generate the JWT Token
        const jwtToken = jwt.sign({ username: username}, jwtSecret);
        res.status(200).send(jwtToken);
      }
    } else {
      res.status(400).send("user not found");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

// Register 
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    password = encryptedPassword;
    const user = new userModel({ username, password });
    user.save();
    res.status(201).send("user created succefully");
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

//encrypted 

app.get("/protected", (req, res) => {
  //const token = req.headers.authToken.split(" ")[1];
  const token=req.headers.authToken
  ///we are passing the token in the header.
  //
  if (!token) {
    res.status(401).send("you are not authorized to access the API");
  } else {
    jwt.verify(token, jwtSecret, (err, user) => {
      if (err) {
        res.status(401).send("you are not authorized to access the API");
      } else {
        res.send(user);
      }
    });
  }
});

// My server is listening to port 3000
app.listen(PORT, () => {
  console.log("server started at" , PORT);
});
