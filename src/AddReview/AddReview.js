import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import toast from "react-hot-toast";
import useTitle from "../Hooks/useTitle";

const AddReview = () => {
  const { user } = useContext(AuthContext);
  const items = useLoaderData();
  useTitle("addreview");
  const { title, service_id, img } = items;

  const hndlRvw = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const message = form.message.value;
    toast.success("Review submit successfully");
    form.reset();
    const orders = {
      email,
      message,
      title,
      service_id,
      img,
    };
    fetch("https://mirpur-photography-server.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orders),
    });
  };

  return (
    <Form className="w-50 mx-auto my-3" onSubmit={hndlRvw}>
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
