import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./SrvName.css";

const SrvName = ({ item }) => {
  console.log(item);
  const {_id,description,img,title,view,star}=item;
  
  return (
    <div>
      <Card variant="top">
        <Card.Img src={img} style={{width:'100%',height:'265px'}} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text style={{textAlign:'justify'}}>
            {description.length<200?description:description.slice(0,125)+"....."}
          </Card.Text>
         <Link to={`/detail/${_id}`}> <Button variant="primary">see details</Button></Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SrvName;
