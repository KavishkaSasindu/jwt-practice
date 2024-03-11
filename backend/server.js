const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/userAuthRoutes");
const userCrudRouter = require("./routes/UserCrudRoutes");

const app = express();

app.use(express.json());
app.use(
  cors({
    credentials: true,
  })
);
app.use(cookieParser());

// server config and db connection
mongoose
  .connect("mongodb://127.0.0.1:27017/authentication")
  .then((result) => {
    console.log("MongoDb is connected");
    app.listen(3000, () => {
      console.log("server is running");
    });
  })
  .catch((error) => {
    console.log(error.message);
  });

//   routes
app.use(authRouter);
app.use(userCrudRouter);
