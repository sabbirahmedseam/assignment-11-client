import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useTitle from "../Hooks/useTitle";

const Login = () => {
  useTitle("login");
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const { logIn } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((err) => setError(err.message));
  };
  return (
    <div className="w-50 mx-auto my-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <p className="text-danger">{error}</p>
        <Button variant="primary" type="submit">
          Login
        </Button>
        &nbsp;
        <span>
          as a new user<Link to="/register">Sign up</Link>
        </span>
      </Form>
    </div>
  );
};

export default Login;
