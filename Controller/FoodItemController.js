const foodData = require("../Models/FoodItemModels");

const create = async (req, res, error) => {
  try {
    const { resturantId, foodName, type, price, Image, userId } = req.body;
    const data = await foodData.create(req.body);
    console.log(data, "....................");
    data.save();
    if (data) {
      return res.status(200).json({ message: "success", data: data });
    } else {
      return res.send({ error: error });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ message: "something went wrong", error: error });
  }
};

const get = async (req, res) => {
  try {
    const data = await foodData.find();
    console.log(data);
    return res.status(200).json({ data: data });
  } catch (error) {
    return res.status(400).send(error);
  }
};

const getPopulate = async (req, res) => {
  try {
    const data = await foodData
      .find()
      .populate("userId")
      .populate("resturantId");
    console.log(data);
    return res.status(200).json({ data: data });
  } catch (error) {
    return res.status(400).send(error);
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

module.exports = { create, get, patch, remove, getPopulate };
