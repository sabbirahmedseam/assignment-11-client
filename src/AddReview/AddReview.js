import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Form from "react-bootstrap/Form";

const AddReview = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </div>
  );
};

export default AddReview;
