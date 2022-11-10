import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import useTitle from "../Hooks/useTitle";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

import "./SrvName.css";
const SrvName = ({ item }) => {
  useTitle("service-name");
  const { _id, description, img, title, view } = item;
  useTitle("service");

  return (
    <div>
      <Card variant="top">
        <PhotoProvider>
          <PhotoView>
            <Card.Img src={img} style={{ width: "100%", height: "265px" }} />
          </PhotoView>
        </PhotoProvider>

        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {description.length < 200
              ? description
              : description.slice(0, 125) + "....."}
          </Card.Text>
          <Button className="mb-4" variant="secondary">
            Price:{view}
          </Button>
          <Link
            className="d-flex justify-content-between"
            to={`/detail/${_id}`}
          >
            <Button variant="primary">see details</Button>
            <Link to="/allcatg">
              <Button variant="primary">All items </Button>
            </Link>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SrvName;
