import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'
import { useParams, useNavigate, Link } from 'react-router-dom'
import './AddFood.css'
import AddCategory from '../category-management/AddCategory'
import Popup from '../category-management/Popup'
// import "bootstrap/dist/css/bootstrap.min.css";

export default function EditItem() {
  const [validated, setValidated] = useState(false)

  const { id } = useParams()

  const [foodName, setfoodName] = useState('')
  const [foodType, setfoodType] = useState('')
  const [price, setprice] = useState('')
  const [quantity, setquantity] = useState('')
  const [image, setimage] = useState('')
  const [description, setdescription] = useState('')

  const [openPopup, setOpenPopup] = useState(false)

  const [categorylist, setCategoryList] = useState([])
  // console.log(categorylist)

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

  // console.log(setimage)

  useEffect(() => {
    async function fetchFood() {
      const response = await fetch('http://localhost:8090/api/food/getfood/' + id)
      const food = await response.json()
      // console.log(food)

      setfoodName(food.food.foodName)
      setfoodType(food.food.foodType)
      setprice(food.food.price)
      setquantity(food.food.quantity)
      setimage(food.food.image)
      setdescription(food.food.description)
    }
    fetchFood()
  }, [id])

  function updateData(e) {
    const form = e.currentTarget

    if (form.checkValidity() === false) {
      e.preventDefault()

      setValidated(true)
      e.stopPropagation()
    } else {
      e.preventDefault()

      const food = {
        foodName,
        foodType,
        price,
        quantity,
        image,
        description,
      }

      axios
        .put('http://localhost:8090/api/food/edit/' + id, food)
        .then(() => {
          console.log('UPDATE PROCEED!')
          alert('Successfully Updated!')
        })
        .catch((err) => {
          alert(err)
        })
    }
    window.location.reload(false)
  }

  function onReset() {
    setfoodName('')
    setfoodType('')
    setprice('')
    setquantity('')
    setimage('')
    setdescription('')
  }
  return (
    <>
      <div className="container1">
        <div className="col-md-8 mt-4 mx-auto">
          <h2 className="h3 mb-3 font-weight-normal text-center">Edit Food Details</h2>
          <div className="additm">
            <Form noValidate validated={validated} onSubmit={updateData} onReset={onReset}>
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
              </div>
              <div>
                <Button
                  onClick={() => setOpenPopup(true)}
                  className="btn btn-info btn-sm float-right"
                >
                  Add Category
                </Button>
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
                <Form.Control.Feedback type="invalid">Please provide a Price</Form.Control.Feedback>
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
                  Please provide a Image URl
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
                style={{ marginTop: '15px', marginBottom: '15px' }}
              >
                <i className="far fa-check-square"></i>
                &nbsp; Update
              </Button>
              <Button
                type="reset"
                className="btn btn-warning float-right"
                // onClick={onHandleSubmit}
                style={{ marginTop: '15px', marginBottom: '15px' }}
              >
                <i className="far fa-check-square"></i>
                &nbsp; reset
              </Button>
              <Link
                to={`/food-management/allfood`}
                className="btn btn-info "
                style={{ marginTop: '15px', marginBottom: '15px' }}
              >
                Go Back
              </Link>
            </Form>
          </div>
        </div>
      </div>
      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <AddCategory />
      </Popup>
    </>
  )
}
