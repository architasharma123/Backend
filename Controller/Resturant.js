const resturantData = require("../Models/Resturant");

const create = async (req, res, error) => {
  try {
    const {
      resturantName,
      resturant_mobile_No,
      discount,
      email,
      address,
      open_time,
      close_time,
      latitude,
      longtude,
    } = req.body;

    const data = await resturantData.create(req.body);
    console.log(data);
    if (data) {
      return res.status(201).json({ message: "Created success", data: data });
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
    const data = await resturantData.find();
    return res.status(200).json({ message: "status ok", data: data });
  } catch (error) {
    console.log(error);
  }
};

const patch = async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await resturantData.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    return res.status(200).json({ message: "success", data: data });
  } catch (e) {
    return res.status(400).json({ message: "Bad Request", e: e });
  }
};

const remove = async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await resturantData.deleteOne({ _id });
    return res.status(200).json({ message: "success", data: data });
  } catch (err) {
    return res.status(500).json({ message: "Bad Request", err: err });
  }
};

module.exports = { create, get, patch, remove };