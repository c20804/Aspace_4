const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const authRoute = require("./routes").auth;
const propertyRoute = require("./routes").property;
const passport = require("passport");
require("./config/passport")(passport);
const cors = require("cors");

mongoose.set('strictQuery', true);
// const courseRoute = require("./routes").course;
// const passport = require("passport");
// require("./config/passport")(passport);



// connect to DB
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connect to Mongo Altas");
  })
  .catch((e) => {
    console.log(e);
  });

  // middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/user", authRoute);
app.use("/api/properties", passport.authenticate("jwt", {session: false}), propertyRoute);

app.listen(8080, () => {
    console.log("Server running on port 8080.");
  });