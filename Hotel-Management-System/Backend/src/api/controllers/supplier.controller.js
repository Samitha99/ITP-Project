import Supplier from "../models/supplier.model";
//add supplier

const addSupplier = (req, res) => {
  const { name, email, contactNo, address, category, password } = req.body;

  const supplier = new Supplier({
    name,
    email,
    contactNo,
    address,
    category,
    password,
  });

  supplier
    .save()
    .then((createdSupplier) => {
      res.json(createdSupplier);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

//get supplier

const getSupplier = async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    res.json(suppliers);
  } catch (error) {
    res.status(400).json(error);
  }
};

//update supplier

const updateSupplier = async (req, res) => {
  const supId = req.params.id;
  
  try {
       const supplier = await Supplier.findById(supId);
       
       if(!supplier){
           return res.status(404).json("There is no supplier");
       }
       const{name, email, contactNo, address, category, password}=req.body;

       const sup = await Supplier.findByIdAndUpdate (supId, {name, email, contactNo, address, category, password});
       res.status(200).json(sup);
   } catch(error) {
       res.status(400).json(error.message);
   }
};

module.exports = {
  addSupplier,
  getSupplier,
  updateSupplier,
};
