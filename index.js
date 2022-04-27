const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
var multer = require("multer");
var fs = require("fs");
var path = require("path");

const cors = require("cors");
var app = express();
const Routes = require("./Routes/UserRoute");
const resturant_Routes = require("./Routes/ResturantRoutes");

const food_routes = require("./Routes/FoodItemRoutes");

const Router = express.Router();
mongoose.connect("mongodb://localhost:27017/zomato");
mongoose.Promise = global.Promise;
app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.use("/", Routes);

app.use("/resturant", resturant_Routes);
app.use("/fooditem", food_routes);

app.use((req, res, next) => {
  next();
});

app.listen(process.env.port || 5000, function () {
  console.log("welcome!");
});
