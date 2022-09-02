import React, { useState } from 'react'
import axios from 'axios'
import { Form, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'react-bootstrap'

export default function AddCatergory() {
  const [validated, setValidated] = useState(false)

  const [categoryName, setcategoryName] = useState('')
  const [description, setdescription] = useState('')
  console.log(categoryName)
  console.log(description)

  function saveCatergory(e) {
    const form = e.currentTarget

    if (form.checkValidity() === false) {
      e.preventDefault()

      setValidated(true)
      e.stopPropagation()
    } else {
      e.preventDefault()

      const newCatergory = {
        categoryName,
        description,
      }

      axios
        .post('http://localhost:8090/api/category/add', newCatergory)
        .then(() => {
          alert('New category Added')
          setcategoryName('')
          setdescription('')
          setValidated(false)
        })
        .catch((err) => {
          alert(err)
        })
    }
    window.location.reload(false)
  }

  return (
    <div className="body">
      <div className="container1">
        <div className="col-md-8 mt-4 mx-auto">
          <h2 className="h5 mb-3 font-weight-normal">Add Category</h2>
          <div className="additm">
            <Form noValidate validated={validated} onSubmit={saveCatergory}>
              <div className="form-group">
                <label className="form-label"> Category Name </label>
                <input
                  type="text"
                  required
                  minLength="2"
                  value={categoryName}
                  className="form-control"
                  placeholder="Enter Category Name"
                  id="ItemName"
                  onChange={(e) => {
                    setcategoryName(e.target.value)
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a Category Name
                </Form.Control.Feedback>
              </div>
              <div className="form-group">
                <label className="form-label"> Description</label>
                <input
                  type="text"
                  required
                  minLength="2"
                  value={description}
                  className="form-control"
                  placeholder="Enter Description"
                  id="ItemName"
                  onChange={(e) => {
                    setdescription(e.target.value)
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a Description
                </Form.Control.Feedback>
              </div>

              <Button
                type="submit"
                className="btn btn-success btn-sm btn-block"
                // onClick={onHandleSubmit}
                style={{ marginTop: '15px', marginBottom: '15px' }}
              >
                <i className="far fa-check-square"></i>
                &nbsp; Add Category
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}
