import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { confirm } from 'react-confirm-box'

const AllFoodPage = () => {
  const [search, setSearch] = useState('')
  // console.log(search)
  const [foods, setFood] = useState([])
  const [filteredFoods, setfilteredFoods] = useState([])
  // console.log(filteredFoods)
  const getFood = async () => {
    try {
      const res = await axios.get('http://localhost:8090/api/food/all')
      setFood(res.data)
      setfilteredFoods(res.data)
    } catch (err) {
      alert(err.message)
    }
  }
  useEffect(() => {
    getFood()
  }, [])

  useEffect(() => {
    // console.log(search)
    const result = foods.filter((food) => {
      return food.foodName.indexOf(search.toLocaleLowerCase()) > -1
    })
    setfilteredFoods(result)
    // console.log(result)
  }, [search])

  // const componentDidMount = async () => {
  //   await axios
  //     .get('http://localhost:8090/api/food')
  //     .then((response) => response.data)
  //     .then((data) => {
  //       this.setState({ empList: data.data })
  //     })
  //     .catch((error) => console.log(error.message))
  // }

  const onDelete = async (id) => {
    const result = await confirm('Are you sure?', {
      closeOnOverlayClick: false,
      labels: {
        confirmable: 'Confirm',
        cancellable: 'Cancel',
      },
    })

    if (result) {
      console.log('You click yes!')
      await handleDelete(id)
      return
    }
    console.log('You click No!')
  }

  // Function for Delete
  const handleDelete = async (id) => {
    await axios
      .delete('http://localhost:8090/api/food/delete/' + id)
      .then((response) => response.data)
      .then((data) => {
        window.location.reload(false)
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  const columns = [
    { name: 'Image', selector: (row) => <img width={50} height={50} src={row.image} /> },
    { name: 'Food Name', selector: (row) => row.foodName, sortable: true },
    { name: 'Food Type', selector: (row) => row.foodType, sortable: true },
    { name: 'Price', selector: (row) => row.price, sortable: true },
    { name: 'Quantity', selector: (row) => row.quantity, sortable: true },
    {
      name: 'Action',
      cell: (row) => (
        <div>
          <Link
            to={`/food-management/editfood/${row._id}`}
            className={'btn btn-primary btn-sm btn-block mt-1 mb-1'}
          >
            EDIT
          </Link>
          <Button
            className="btn btn-danger btn-sm btn-block mt-1 mb-1"
            onClick={() => {
              onDelete(row._id)
            }}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ]

  return (
    <>
      <DataTable
        title="Food Details"
        columns={columns}
        data={filteredFoods}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="450px"
        // selectableRows
        selecttableRowsHighlighted
        highlightOnHover
        actions={
          <div>
            <Button className="btn btn-info btn-sm">Export</Button>
            <Link to={`/food-management/addfood`} className="btn btn-primary btn-sm">
              +Add Item
            </Link>
          </div>
        }
        subHeader
        subHeaderComponent={
          <input
            type="text"
            className="w-25 form-control"
            placeholder="Search here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        }
      />
    </>
  )
}
export default AllFoodPage
