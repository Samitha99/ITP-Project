import express from "express";
const router = express.Router();
import {
    addCategory,
    getCategorys,
    updateCategory,
    getCategoryById,
    deleteCategory,
} from "../controllers/category.controller";

//@route GET api/category/all
//@desc Get all categorys
router.get("/all", getCategorys);

//@route POST api/category
//@desc Add category
router.post("/add", addCategory);

//@route PUT api/category/:idd
//@desc Update category
router.put("/edit/:id", updateCategory);

//@route GET api/category/show
//@desc Update category
router.get("/getcategory/:id", getCategoryById);

//@route DELETE api/category/delete
//@desc Delete category
router.delete("/delete/:id", deleteCategory);

module.exports = router;
