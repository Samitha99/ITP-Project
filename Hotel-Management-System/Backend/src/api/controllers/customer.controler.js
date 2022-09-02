const Customer = require("../models/customer");

const addCustomer = (req, res) => {

    const { name, position, salary } = req.body;

    const Customer = new Customer({
        name,
        telephoneNumber,
        Nic,
        address,
    });
    Customer
        .save()
        .then((createCustomer) => {
            res.json(createdCustomer);
        })
        .catch((error) => {
            res.status(400).json(error)
        })
};

const getCustomers = async (req, res) => {
    try {
        const Customer = await Customer.find();
        res.json(Customer)
    } catch (error) {
        res.status(400).json(error)
    }
};

module.exports = {
    addCustomer,
    getCustomers,
};