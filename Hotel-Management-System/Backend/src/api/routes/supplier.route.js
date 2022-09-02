const express = require('express');
const router = express.Router();
const {
    addSupplier,
    getSupplier,
    updateSupplier,
} = require('../controllers/supplier.controller');

//@route GET api/supplier/all
//@desc Get all suppliers
router.get("/all", getSupplier);

//@route POST api/supplier
//@desc Add supplier
router.post("/", addSupplier);

//@route PUT api/supplier
//@desc update supplier
router.put("/:id", updateSupplier);

module.exports = router;