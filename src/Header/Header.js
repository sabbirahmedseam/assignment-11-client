import React, { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import "./Header.css";
import pic from "../Images/camera.jpg";
import useTitle from "../Hooks/useTitle";

const Header = () => {
  const { logOut, user } = useContext(AuthContext);
  useTitle("header");
  const handleOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Navbar
        className="d-flex justify-content-between align-items-center rounded p-1 mt-3"
        bg="dark"
        variant="dark"
      >
        <Image style={{ height: "30px" }} rounded src={pic}></Image>
        <Navbar.Brand href="#home">React-Photography</Navbar.Brand>

        <Nav className="me-auto d-flex justify-content-between align-items-center gap-3">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/blog">
            Blog
          </Link>
          {user?.email ? (
            <>
              <Link className="link" to="/summary">
                Added item
              </Link>
              <Link className="link" to="/update">
                My Reviews
              </Link>
              <Button variant="outline-success" onClick={() => handleOut()}>
                Signout
              </Button>
            </>
          ) : (
            <>
              <Link className="link" to="/login">
                Login
              </Link>
              <Link className="link" to="/register">
                Registration
              </Link>
            </>
          )}
        </Nav>
      </Navbar>
    </div>
  );
};
export default Header;
