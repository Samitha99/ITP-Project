import express from "express";
const router = express.Router();
import {
  addFood,
  getFoods,
  updateFood,
  getFoodById,
  deleteFood,
} from "../controllers/food.controller";

//@route GET api/food/all
//@desc Get all foods
router.get("/all", getFoods);

//@route POST api/food
//@desc Add food
router.post("/add", addFood);

//@route PUT api/food/:idd
//@desc Update food
router.put("/edit/:id", updateFood);

//@route GET api/food/show
//@desc Update food
router.get("/getfood/:id", getFoodById);

//@route DELETE api/food/delete
//@desc Delete food
router.delete("/delete/:id", deleteFood);

module.exports = router;
