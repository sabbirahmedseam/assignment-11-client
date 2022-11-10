import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useTitle from "../Hooks/useTitle";

const UpdateReview = () => {
  const { user } = useContext(AuthContext);
  useTitle("review");

  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(
      `https://mirpur-photography-server.vercel.app/orders?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [user]);

  const handleDlt = (id) => {
    toast.success("deleted successfully");
    fetch(`https://mirpur-photography-server.vercel.app/orders/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const remaining = items.filter((item) => item._id !== id);
        setItems(remaining);
      });
  };

  return (
    <div>
      {items?.length === 0 ? (
        <h3 className="text-danger">No reviews were added</h3>
      ) : (
        <>
          <h2>
            Total review of
            <img
              src={user?.photoURL}
              className="rounded-circle"
              style={{ height: "30px", width: "30px" }}
              alt=""
            />
            <span className="text-danger">{user?.email}</span>
            &#8594;{items.length}
          </h2>
        </>
      )}

      {items.map((item) => (
        <p key={item._id}>
          <img
            className="rounded"
            style={{ height: "30px", width: "30px" }}
            src={item.img}
            alt=""
          />
          &nbsp;
          <b>{item.email}</b>
          <b className="mx-3">{item.message}</b>
          <Link to={`/change/${item._id}`}>
            <button className="rounded">Update</button>
          </Link>
          &nbsp;
          <button className="rounded" onClick={() => handleDlt(item._id)}>
            Delete
          </button>
        </p>
      ))}
    </div>
  );
};

export default UpdateReview;
