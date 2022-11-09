import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { AuthContext } from "../AuthProvider/AuthProvider";

const BuyItm = () => {
  const item = useLoaderData();
  const { user } = useContext(AuthContext);

  const { _id, img, title, service_id, view } = item;
  console.log(item);

  const hndlRvw = (event) => {
    event.preventDefault();
    const email = event.target.email.value;

    const orders = {
      email,
      title,
     
      service_id,
      img,
    };
    console.log(orders);
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orders),
    });
  };

  return (
    <Form className="w-50 mx-auto mb-3" onSubmit={hndlRvw}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" name="product" defaultValue={title} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" defaultValue={user?.email} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Product Id</Form.Label>
        <Form.Control type="text" name="id" defaultValue={_id} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Product Price</Form.Label>
        <Form.Control type="text" name="price" defaultValue={`${view}$`} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Buy
      </Button>
    </Form>
  );
};

export default BuyItm;
