import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const UpdateReview = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [user]);
  console.log(items);
  return (
    <div>
        update length{items.length}
{
    items.map(item=>
    
    )
}

        </div>
  );
};

export default UpdateReview;
