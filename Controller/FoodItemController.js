const foodData = require("../Models/FoodItemModels");

const create = async (req, res) => {
  try {
    const { foodName, price, type, Image } = req.body;

    const obj = {
      foodName,
      price,
      type,
      Image,
    };

    const data = await foodData.create(obj);
    //   data.save();
    return res.status(200).json({ message: "success", data: data });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "something went wrong", error: error });
  }
};

const get = async (req, res) => {
  try {
    // console.log(req.header, "llllllllllllllllllllllll");
    const data = await foodData.find();
    return res.status(200).json({ message: "success", data: data });
  } catch (error) {
    return res.status(400).json({ message: "somthing wrong", error: error });
  }
};

const patch = async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await foodData.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    return res.status(200).json({ message: "success", data: data });
  } catch (e) {
    return res.status(500).json({ message: "somthing went wrong", e: e });
  }
};

const remove = async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await foodData.deleteOne({ _id });
    return res.status(200).json({ message: "success", data: data });
  } catch (err) {
    return res.status(500).json({ message: "somthing went wrong", err: err });
  }
};

module.exports = { create, get, patch, remove };
