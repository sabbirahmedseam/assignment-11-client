import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Summary = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  console.log(user?.email);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [user]);
  console.log(orders);
  useEffect(() => {
    fetch(`http://localhost:5000/review?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      });
  }, [user]);
  console.log(items);

  const handleDlt = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/review/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const remaining = items.filter((item) => item._id !== id);
        setItems(remaining);
      });
  };

  return (
    <div className="d-flex justify-content-around">
      <div>
        <h1>total purchase {items.length}</h1>
        {items?.map((item) => (
          <div key={item._id} className="d-flex mb-3">
            <p>{item?.email}</p>
            <img
              src={item.img}
              style={{ height: "50px", width: "50px" }}
              alt=""
            />
            <p>{item.title}</p>
            <button onClick={() => handleDlt(item._id)}>X</button>
          </div>
        ))}
      </div>
      <div>
        
        <h1>Review:{orders.length}</h1>
      </div>
    </div>
  );
};

export default Summary;
