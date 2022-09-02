import express from "express";
const router = express.Router();
const {
    addCustomer,
    getCustomers,
} = require('../controllers/customer.controler');

//@route GET api/employee/all
//@desc Get all employeess
router.get("/all", getCustomers);

//@route POST api/employee
//@desc Add employee
router.post("/add", addCustomer);

module.exports = router;