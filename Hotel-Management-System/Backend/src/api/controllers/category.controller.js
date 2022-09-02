import Category from "../models/category.model";

const addCategory = (req, res) => {
  const { categoryName, description } = req.body;

  const category = new Category({ categoryName, description });

  category
    .save()
    .then((createdCategory) => {
      res.json(createdCategory);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

const getCategorys = async (req, res) => {
  try {
    const categorys = await Category.find();
    res.json(categorys);
  } catch (err) {
    res.status(404).json(err.message);
  }
};

const updateCategory = async (req, res) => {
  const categoryId = req.params.id;

  try {
    const category = await Category.findById(categoryId);

    if (!category) {
      return res.status(404).json("There is not a category");
    }

    const { categoryName, description } = req.body;
    // console.log(req.body);
    const ct = await Category.findByIdAndUpdate(categoryId, {
      categoryName,
      description,
    });
    res.status(200).json(ct);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteCategory = async (req, res) => {
  const id = req.params.id;
  let category;
  try {
    category = await Category.findByIdAndRemove(id);
  } catch (error) {
    console.log(error.message);
  }
  if (!category) {
    return res.status(404).json({ message: "category not found" });
  }
  return res.status(200).json({ category });
};

const getCategoryById = async (req, res) => {
  try {
    if (req.params && req.params.id) {
      const category = await Category.findById(req.params.id);

      return res.status(200).json({
        code: 200,
        success: true,
        status: "OK",
        category: category,
        message: `category details recieved.`,
      });
    }
  } catch (err) {
    return res.status(500).json({
      code: 500,
      success: false,
      status: "Internal Server Error",
      message: err.message,
    });
  }
};

module.exports = {
  addCategory,
  getCategorys,
  updateCategory,
  getCategoryById,
  deleteCategory,
};
