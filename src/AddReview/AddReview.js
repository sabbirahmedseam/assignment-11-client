import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const AddReview = () => {
  const { user } = useContext(AuthContext);
  const items = useLoaderData();
  const { title, service_id, img } = items;
  console.log(items);
  console.log(img);
  //   console.log(title, _id);
  //   console.log(user);
  console.log(user.email);

  const hndlRvw = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const message = event.target.message.value;
    const orders = {
      email,
      message,
      title,
      service_id,
      img,
    };
    console.log(orders);
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orders),
    });
  };

  return (
    <Form className="w-50 mx-auto" onSubmit={hndlRvw}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          defaultValue={user?.email}
          placeholder="name@example.com"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control
          placeholder="Message"
          name="message"
          as="textarea"
          rows={3}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddReview;
