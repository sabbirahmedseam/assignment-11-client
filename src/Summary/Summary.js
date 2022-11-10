import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useTitle from "../Hooks/useTitle";

const Summary = () => {
  const { user } = useContext(AuthContext);
  useTitle("summary");
  const [items, setItems] = useState([]);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(
      `https://mirpur-photography-server.vercel.app/orders?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [user]);
  useEffect(() => {
    fetch(
      `https://mirpur-photography-server.vercel.app/review?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [user]);

  const handleDlt = (id) => {
    fetch(`https://mirpur-photography-server.vercel.app/review/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const remaining = items.filter((item) => item._id !== id);
        setItems(remaining);
      });
  };

  return (
    <div className="w-50 mx-auto">
      <div>
        <h3>
          Total purchase of{" "}
          <img
            className="rounded"
            style={{ height: "30px", width: "30px" }}
            src={user?.photoURL}
            alt=""
          />{" "}
          &nbsp;
          {user?.displayName ? (
            <span style={{ color: "orange" }}>{user?.displayName}</span>
          ) : (
            <span style={{ color: "orange" }}>{user?.email}</span>
          )}
          :&nbsp;<span className="text-success">{items.length}</span>
        </h3>

        {items?.map((item) => (
          <div
            key={item._id}
            className="d-flex justify-content-between align-items-center gap-2 mb-3"
          >
            <img
              className="rounded circle"
              src={item.img}
              style={{ height: "50px", width: "50px" }}
              alt=""
            />

            <b>{item.title}</b>

            <button className="rounded" onClick={() => handleDlt(item._id)}>
              Cancel
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Summary;
