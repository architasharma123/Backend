const controller_food = require("../Controller/FoodItem");

const express = require("express");

const router = express.Router();

router.get("/", controller_food.get);

router.post("/", controller_food.create);
router.patch("/:id", controller_food.patch);
router.delete("/:id", controller_food.remove);

module.exports = router;
