import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const AllCatg = () => {
  const category = useLoaderData();
//   console.log(category);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "20px",
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
                : ctg.description.slice(0, 125) + "....."}
            </Card.Text>
            <Link to={`/detail/${ctg._id}`}>
              <Button variant="primary">see details</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default AllCatg;
