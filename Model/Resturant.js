const mongoose = require("mongoose");
const validator = require("validator");

const Schema = mongoose.Schema;

const resturantSchema = new mongoose.Schema({
  resturantName: {
    type: String,
  },

  resturant_mobile_No: {
    type: Number,
    require: true,
  },

  discount: {
    type: Number,
  },

  email: {
    type: String,
    unique: [true, "Email id already present"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new error("invalide Email");
      }
    },
  },

  address: {
    type: String,
  },
  open_time: {
    type: String,
  },
  close_time: {
    type: String,
  },

  latitude: {
    type: Number,
  },

  longtude: {
    type: Number,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updateAt: {
    type: Date,
    default: Date.now(),
  },
});

const resturants = mongoose.model("resturantSchema", resturantSchema);
module.exports = resturants;
