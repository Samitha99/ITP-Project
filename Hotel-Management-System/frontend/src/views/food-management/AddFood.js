import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Form, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'react-bootstrap'
import './AddFood.css'
import AddCategory from '../category-management/AddCategory'
import { Link } from 'react-router-dom'
import Popup from '../category-management/Popup'

// import "bootstrap/dist/css/bootstrap.min.css";

export default function AddItem() {
  const [validated, setValidated] = useState(false)

  const [foodName, setfoodName] = useState('')
  const [foodType, setfoodType] = useState('')
  const [price, setprice] = useState('')
  const [quantity, setquantity] = useState('')
  const [image, setimage] = useState('')
  const [description, setdescription] = useState('')

  const [openPopup, setOpenPopup] = useState(false)

  const [categorylist, setCategoryList] = useState([])
  console.log(categorylist)

  const getCategoryList = async () => {
    try {
      const res = await axios.get('http://localhost:8090/api/category/all')
      setCategoryList(res.data)
      // console.log(res.data)
    } catch (err) {
      alert(err.message)
    }
  }
  useEffect(() => {
    getCategoryList()
  }, [])

  function saveItem(e) {
    const form = e.currentTarget

    if (form.checkValidity() === false) {
      e.preventDefault()

      setValidated(true)
      e.stopPropagation()
    } else {
      e.preventDefault()

      const newItem = {
        foodName,
        foodType,
        price,
        quantity,
        image,
        description,
      }

      axios
        .post('http://localhost:8090/api/food/add', newItem)
        .then(() => {
          alert('New Food Added')
          setfoodName('')
          setfoodType('')
          setprice('')
          setquantity('')
          setimage('')
          setdescription('')
          setValidated(false)
        })
        .catch((err) => {
          alert(err)
        })
    }
  }

  return (
    <>
      <div className="body">
        <div className="container1">
          <div className="col-md-8 mt-4 mx-auto">
            <h2 className="h3 mb-3 font-weight-normal text-center">Add New Food</h2>
            <div className="additm">
              <Form noValidate validated={validated} onSubmit={saveItem}>
                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label className="form-label" style={{ marginBottom: '5px' }}>
                    {' '}
                    Food Name{' '}
                  </label>
                  <input
                    type="text"
                    required
                    minLength="2"
                    value={foodName}
                    className="form-control"
                    placeholder="Enter Food Name"
                    id="ItemName"
                    onChange={(e) => {
                      setfoodName(e.target.value)
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a Item Name
                  </Form.Control.Feedback>
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label className="form-label" style={{ marginBottom: '5px' }}>
                    Select Food Type
                  </label>
                  <div className="col-xs-4">
                    <select
                      name="category_id"
                      className="form-control"
                      onChange={(e) => {
                        setfoodType(e.target.value)
                      }}
                      value={foodType}
                    >
                      <option>Select Category</option>
                      {categorylist.map((item) => {
                        return (
                          <option value={item.name} key={item._id}>
                            {item.categoryName}
                          </option>
                        )
                      })}
                    </select>
                    {/* <Link
                      to={`/category-management/addcategory`}
                      className="btn btn-info btn-sm float-right"
                      style={{ marginTop: '15px', marginBottom: '15px' }}
                    >
                      Add Category
                    </Link> */}
                    <div>
                      <Button
                        onClick={() => setOpenPopup(true)}
                        className="btn btn-info btn-sm float-right"
                      >
                        Add Category
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label className="form-label" style={{ marginBottom: '5px' }}>
                    {' '}
                    Price{' '}
                  </label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Enter Price"
                    id="QualityAssurance"
                    value={price}
                    onChange={(e) => {
                      setprice(e.target.value)
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a Price
                  </Form.Control.Feedback>
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label className="form-label" style={{ marginBottom: '5px' }}>
                    {' '}
                    Quantity{' '}
                  </label>
                  <input
                    type="number"
                    required
                    className="form-control"
                    placeholder="Enter Quantity"
                    id="QualityAssurance"
                    value={quantity}
                    onChange={(e) => {
                      setquantity(e.target.value)
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a Quantity
                  </Form.Control.Feedback>
                </div>
                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label className="form-label" style={{ marginBottom: '5px' }}>
                    {' '}
                    Image{' '}
                  </label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Enter Image Url"
                    id="QualityAssurance"
                    value={image}
                    onChange={(e) => {
                      setimage(e.target.value)
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a Image Url
                  </Form.Control.Feedback>
                </div>
                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label className="form-label" style={{ marginBottom: '5px' }}>
                    {' '}
                    Description{' '}
                  </label>
                  <input
                    type="text"
                    required
                    minLength="2"
                    value={description}
                    className="form-control"
                    placeholder="Enter Food Type"
                    id="BrandName"
                    onChange={(e) => {
                      setdescription(e.target.value)
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a Food Type
                  </Form.Control.Feedback>
                </div>

                <Button
                  type="submit"
                  className="btn btn-success float-right"
                  // onClick={onHandleSubmit}
                  style={{ marginTop: '15px', marginBottom: '15px' }}
                >
                  <i className="far fa-check-square"></i>
                  &nbsp; Save
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <AddCategory />
      </Popup>
    </>
  )
}
