import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { AuthContext } from "../AuthProvider/AuthProvider";

const SeeReview = () => {
  const { user } = useContext(AuthContext);
  console.log(user.photoURL);
  const items = useLoaderData();
  console.log(items);

  return (
    <div>
      <h1>This item has {items.length} review</h1>
      {items.map((item) => (
        <Form className="mb-5">
          <img src={user.photoURL} alt="" />
          <Row>
            <Col>
              <Form.Control
                defaultValue={`Name:${item.title}`}
                placeholder="Last name"
              />
            </Col>
            <Col>
              <Form.Control
                defaultValue={`User:${item.email}`}
                placeholder="First name"
              />
            </Col>
            <Col>
              <Form.Control
                defaultValue={`Review:${item.message}`}
                placeholder="First name"
              />
            </Col>
          </Row>
        </Form>
      ))}
    </div>
  );
};

export default SeeReview;
