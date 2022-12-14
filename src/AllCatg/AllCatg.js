import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import useTitle from "../Hooks/useTitle";

const AllCatg = () => {
  const category = useLoaderData();

  useTitle("allcategory");

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "20px",
        margin: "10px 0",
      }}
    >
      {category.map((ctg) => (
        <Card variant="top" key={ctg._id}>
          <Card.Img src={ctg.img} style={{ width: "100%", height: "265px" }} />
          <Card.Body>
            <Card.Title>{ctg.title}</Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>
              {ctg.description.length < 200
                ? ctg.description
                : ctg.description.slice(0, 100) + "....."}
            </Card.Text>
            <Button className="mb-4" variant="secondary">
              Price:{ctg.view}$
            </Button>
            <Link
              className="d-flex justify-content-between"
              to={`/detail/${ctg._id}`}
            >
              <Button variant="primary">see details</Button>
              <Link to={`/buy/${ctg._id}`}>
                <Button variant="primary">Buy Now</Button>
              </Link>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default AllCatg;
