import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import "./Header.css";
const Header = () => {
  const { logOut } = useContext(AuthContext);
  const handleOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Navbar collapseOnSelect bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Nav className="me-auto">
          <Link>Home</Link>
          <Link to="/blog">Blog</Link>
        </Nav>
        <Button onClick={() => handleOut()}>LogOut</Button>
      </Navbar>
    </div>
  );
};

export default Header;
