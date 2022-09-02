import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilCursor, cilPuzzle, cilSpeedometer } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },

  {
    component: CNavTitle,
    name: 'Management',
  },
  /////////////////////////////////Drop Down///////
  {
    component: CNavGroup,
    name: 'Food Management',
    to: '/food-management',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Food',
        to: '/food-management/addfood',
      },
      {
        component: CNavItem,
        name: 'All Food',
        to: '/food-management/allfood',
      },
    ],
  },

  // {
  //   component: CNavGroup,
  //   name: 'Buttons',
  //   to: '/buttons',
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     // {
  //     //   component: CNavItem,
  //     //   name: 'Buttons',
  //     //   to: '/buttons/buttons',
  //     // },
  //     {
  //       component: CNavItem,
  //       name: 'Buttons groups',
  //       to: '/buttons/button-groups',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Dropdowns',
  //       to: '/buttons/dropdowns',
  //     },
  //   ],
  // },
]

export default _nav
