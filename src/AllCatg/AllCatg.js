import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import toast from "react-hot-toast";
import { Toast } from "react-bootstrap";

const AllCatg = () => {
  const category = useLoaderData();
  //   console.log(category);

  const clk = () => {
    toast.success("Your purchase is processing");
  };

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
            <Button className="mb-4" variant="secondary">
              Price:{ctg.view}
            </Button>
            <Link
              className="d-flex justify-content-between"
              to={`/detail/${ctg._id}`}
            >
              <Button variant="primary">see details</Button>
              <Link to="/buy">
                <Button onClick={() => clk()} variant="primary">
                  Buy Now
                </Button>
              </Link>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default AllCatg;
