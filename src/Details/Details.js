import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaEye, FaStar } from "react-icons/fa";

const Details = () => {
  const items = useLoaderData();
  const { _id, description, img, title, view, star } = items;
  //   console.log(items);
  return (
    <div className="w-50 mx-auto">
      <Card variant="top">
        <Card.Img src={img} style={{ width: "100%", height: "265px" }} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <b className="d-flex justify-content-between align-items-center gap-1">
              {" "}
              <FaEye></FaEye> {view}
            </b>

            <b className="d-flex justify-content-between align-items-center gap-1">
              <FaStar></FaStar>
              {star}
            </b>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <Link to={`/allcatg`}>
              <Button variant="primary">Previous</Button>
            </Link>
            <Link to="/review">
              <Button variant="primary">Add review</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Details;
