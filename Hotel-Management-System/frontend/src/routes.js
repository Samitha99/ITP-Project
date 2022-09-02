import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

//food management
const AddFood = React.lazy(() => import('./views/food-management/AddFood'))
const AllFood = React.lazy(() => import('./views/food-management/AllFood'))
const EditFood = React.lazy(() => import('./views/food-management/EditFood'))

//Category management
const AddCatergory = React.lazy(() => import('./views/category-management/AddCategory'))

// Buttons
// const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
// const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
// const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

const routes = [
  // { path: '/web', exact: true, name: 'Home' },
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  // Food
  // { path: '/food-management', name: 'Food Management', element: AddFood, exact: true },
  { path: '/food-management/addfood', name: 'Add Food', element: AddFood },
  { path: '/food-management/allfood', name: 'All Food', element: AllFood },
  { path: '/food-management/editfood/:id', name: 'Edit Food', element: EditFood },

  //category
  { path: '/category-management/addcategory', name: 'Add Category', element: AddCatergory },

  // { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  // { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
]

export default routes
