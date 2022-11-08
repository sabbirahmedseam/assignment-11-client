import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import './Header.css'
const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Nav className="me-auto">
            <Link >Home</Link>
         <Link to='/blog'>Blog</Link>
          
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
