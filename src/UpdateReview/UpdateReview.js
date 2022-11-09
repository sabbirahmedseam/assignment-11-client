import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const UpdateReview = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  console.log(user?.photoURL);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [user]);
  console.log(items);

  const handleDlt = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/orders/${id}`, {
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
    <div>
      <h1> update length{items.length}</h1>
      <h2>
        Total review of <span className="bg-danger">{user?.email}</span>{" "}
        {items.length}
      </h2>

      {items.map((item) => (
        <p key={item._id}>
          <b>{item.message}</b>
          <button onClick={() => handleDlt(item._id)}>Delete</button>
        </p>
      ))}
    </div>
  );
};

export default UpdateReview;
