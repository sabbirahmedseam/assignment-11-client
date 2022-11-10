import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useTitle from "../Hooks/useTitle";

const SeeReview = () => {
  const { user } = useContext(AuthContext);
  const items = useLoaderData();
  useTitle("seereview");
  return (
    <div>
      {items?.length === 0 ? (
        <h3 className="text-danger">No review here</h3>
      ) : (
        <h1>This item has {items.length} review</h1>
      )}
      {items.map((item) => (
        <Form className="mb-5">
          <div className="my-2">
            <img
              src={user?.photoURL}
              className="rounded-circle"
              style={{ height: "50px", width: "50px" }}
              alt=""
            />
            <b>
              User Name:
              <span className="text-success">{user?.displayName}</span>
            </b>
          </div>
          <Row>
            <Col>
              <Form.Control
                defaultValue={`Product:${item.title}`}
                placeholder="Last name"
              />
            </Col>
            <Col>
              <Form.Control
                defaultValue={`User-Email:${item.email}`}
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
