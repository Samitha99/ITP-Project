import React, { Component } from 'react'
import logo from './f1.png'
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import './navbar.css'
import Container from 'react-bootstrap/Container'
import * as Icon from 'react-bootstrap-icons'
import { BiCart, BiSearchAlt2, BiUserCircle } from 'react-icons/bi'
import { IconContext } from 'react-icons'

const NavBar = () => {
  return (
    <>
      <div className="App">
        <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
          <Navbar.Brand href="/web">
            <img src={logo} width="40px" height="40px" /> Crown Hotel
          </Navbar.Brand>
          <Navbar.Toggle className="coloring" />
          <Navbar.Collapse>
            <Nav className="container-fluid">
              <Nav.Item>
                <NavDropdown title="Products">
                  <NavDropdown.Item href="#products/tea">Tea</NavDropdown.Item>
                  <NavDropdown.Item href="#products/coffee">Coffee</NavDropdown.Item>
                  <NavDropdown.Item href="#products/chocolate">Chocolate</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#products/promo">Promo</NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#blog">Blog</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/web/about">About Us</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#contact-us">Contact Us</Nav.Link>
              </Nav.Item>
              <Nav.Item className="ml-auto">
                <Nav.Link href="#contact-us">
                  <IconContext.Provider value={{ color: 'white', size: 25 }}>
                    <BiUserCircle />
                  </IconContext.Provider>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="ml">
                <Nav.Link href="#contact-us">
                  <IconContext.Provider value={{ color: 'white', size: 25 }}>
                    <BiCart />
                  </IconContext.Provider>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="ml">
                <Nav.Link href="#contact-us">
                  <IconContext.Provider value={{ color: 'white', size: 25 }}>
                    <BiSearchAlt2 />
                  </IconContext.Provider>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  )
}

export default NavBar
