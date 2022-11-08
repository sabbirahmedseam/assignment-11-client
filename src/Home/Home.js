import React from "react";
import { Button } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import SrvName from "../SrvName/SrvName";
import "./Home.css";

const Home = () => {
  const items = useLoaderData();

  return (
    <div className="div">
      <img
        className="w-100 rounded-3"
        src="https://wallpapercave.com/wp/wp1933135.jpg"
        alt=""
      />
      <div className="part">
        <p>
          Color photography started to become popular and accessible with the
          release of Eastman Kodak’s “Kodachrome” film in the 1930s. Before
          that, almost all photos were monochromatic – although a handful of
          photographers, toeing the line between chemists and alchemists, had
          been using specialized techniques to capture color images for decades
          before. You’ll find some fascinating galleries of photos from the
          1800s or early 1900s captured in full color, worth exploring if you
          have not seen them already. These scientist-magicians, the first color
          photographers, are hardly alone in pushing the boundaries of one of
          the world’s newest art forms. The history of photography has always
          been a history of people – artists and inventors who steered the field
          into the modern era
        </p>
        <img
          src="https://images.unsplash.com/file-1662566326028-7013d2f857a6image?dpr=2&auto=format&fit=crop&w=416&q=60"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1553880376-2dec478c8e3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
          alt=""
        />
        <p>
          Color photography started to become popular and accessible with the
          release of Eastman Kodak’s “Kodachrome” film in the 1930s. Before
          that, almost all photos were monochromatic – although a handful of
          photographers, toeing the line between chemists and alchemists, had
          been using specialized techniques to capture color images for decades
          before. You’ll find some fascinating galleries of photos from the
          1800s or early 1900s captured in full color, worth exploring if you
          have not seen them already. These scientist-magicians, the first color
          photographers, are hardly alone in pushing the boundaries of one of
          the world’s newest art forms. The history of photography has always
          been a history of people – artists and inventors who steered the field
          into the modern era
        </p>
      </div>
      <div className="items">
        {items.map((item) => (
          <SrvName key={item._id} item={item}></SrvName>
        ))}
      </div>
      <div className="d-flex justify-content-end">
        <Link to="/allcatg">
          <Button> all categories</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
