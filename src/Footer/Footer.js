import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="w-50 mx-auto">
        <div className=" d-flex justify-content-between">
          <b className="bold">Facebook</b>
          <b className="bold">Twitter</b>
          <b className="bold"> Youtube</b>
          <b className="bold">Github</b>
        </div>
      </div>
      <p> &copy;  copyright &#8594;2015</p>
    </div>
  );
};

export default Footer;
