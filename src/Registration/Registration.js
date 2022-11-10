import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useTitle from "../Hooks/useTitle";

const Registration = () => {
  useTitle("registration");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { googleSignIn, signInPass, updateUser } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const profile = {
      displayName: name,
      photoURL: photo,
    };
    form.reset();
    signInPass(email, password)
      .then((result) => {
        toast.success("sign in successful");
        navigate("/");

        const user = result.user;
        updateUser(profile);
      })
      .catch((err) => setError(err.message));
  };

  const hndleGgl = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        toast.success("sign in successfully");
        navigate("/");
        const user = result.user;
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="w-50 mx-auto my-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="Enter Photo Url"
          />
        </Form.Group>
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
          Registration
        </Button>
        <span>
          Already have an account <Link to="/login">Login</Link>
        </span>
      </Form>
      <br />
      <Button onClick={() => hndleGgl()} variant="primary" type="submit">
        Sign in with Google
      </Button>
    </div>
  );
};

export default Registration;
