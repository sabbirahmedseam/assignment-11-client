import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../Hooks/useTitle";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

const ChangeReview = () => {
  const item = useLoaderData();
  const [user, setUser] = useState({});
  useTitle("change-review");

  const handleUpdate = (event) => {
    event.preventDefault();
    fetch(`https://mirpur-photography-server.vercel.app/order/${item._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("user updated successfully");
        }
      });
  };

  const handleChange = (event) => {
    event.preventDefault();
    const form = event.target;
    const field = form.name;
    const value = form.value;

    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };

  return (
    <div>
      <Form onSubmit={handleUpdate} className="w-50 mx-auto my-3">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            defaultValue={item?.email}
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control
            placeholder="Message"
            name="message"
            as="textarea"
            onChange={handleChange}
            defaultValue={item?.message}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ChangeReview;
