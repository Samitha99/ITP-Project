import Food from "../models/food.model";

const addFood = (req, res) => {
  const { foodName, foodType, price, quantity,description, image } = req.body;

  const food = new Food({ foodName, foodType, price, quantity,description, image });

  food
    .save()
    .then((createdFood) => {
      res.json(createdFood);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

const getFoods = async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    res.status(404).json(err);
  }
};

const updateFood = async (req, res) => {
  const foodId = req.params.id;

  try {
    const food = await Food.findById(foodId);

    if (!food) {
      return res.status(404).json("There is not a food");
    }

    const { foodName, foodType, price, quantity,description, image } = req.body;
    // console.log(req.body);
    const fd = await Food.findByIdAndUpdate(foodId, {
      foodName,
      foodType,
      price,
      quantity,
      image,
    });

    res.status(200).json(fd);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteFood = async (req, res) => {
  const id = req.params.id;
  let food;
  try {
    food = await Food.findByIdAndRemove(id);
  } catch (error) {
    console.log(error.message);
  }
  if (!food) {
    return res.status(404).json({ message: "food not found" });
  }
  return res.status(200).json({ food });
};

const getFoodById = async (req, res) => {
  // const { foodName, foodType, price, quantity } = req.body;
  // console.log(req.body);
  try {
    if (req.params && req.params.id) {
      const food = await Food.findById(req.params.id);

      return res.status(200).json({
        code: 200,
        success: true,
        status: "OK",
        food: food,
        message: `food details recieved.`,
      });
    }

    // const food = await Food.findById(foodId, "foodName");
    // res.status(200).json(food);
  } catch (err) {
    return res.status(500).json({
      code: 500,
      success: false,
      status: "Internal Server Error",
      message: error.message,
    });
  }
};

module.exports = {
  addFood,
  getFoods,
  updateFood,
  getFoodById,
  deleteFood

};
