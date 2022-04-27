const foodData = require("../Model/FoodItem");

const create = async (req, res) => {
  const { foodName, price, type, Image } = req.body;

  const obj = {
    foodName,
    price,
    type,
    Image,
  };

  const data = await foodData.create(obj);
//   data.save();
  return res.status(200).json({ data: data });
};

const get = async (req, res) => {
  try {
    const data = await foodData.find();
    return res.status(200).json({ data: data });
  } catch (error) {
    console.log(error);
  }
};

const patch = async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await foodData.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    return res.status(200).json({ data: data });
  } catch (e) {
    return res.status(500).send(e);
  }
};

const remove = async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await foodData.deleteOne({ _id });
    return res.status(200).json({ data: data });
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = { create, get, patch, remove };
