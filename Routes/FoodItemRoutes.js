const controller_food = require("../Controller/FoodItemController");
const checkStatus = require("../TokenManager/auth");
const express = require("express");

const router = express.Router();
router.get("/populateData", controller_food.getPopulate);
router.get("/", controller_food.get);
// router.get("/", checkStatus, controller_food.get);

router.post("/", controller_food.create);
router.patch("/:id", controller_food.patch);
router.delete("/:id", controller_food.remove);

module.exports = router;
