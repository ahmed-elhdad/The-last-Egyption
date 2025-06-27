// Home.jsx
import { Link } from "react-router-dom";
import "./App.css";
import "./index.css";
import Nav from "./components/nav";
import Hero from "./components/2-hero";
import Header from "./components/1-header";
import { useEffect, useState } from "react";

export default function Home() {
  // const [images, setImages] = useState([]);
  // useEffect(() => {
  //   fetch("/public/data/imagesSlider.json")
  //     .then((req) => {
  //       let data = req.responseText;
  //       data = req.json();
  //       return data;
  //     })
  //     .then((data) => {
  //       setImages(data);
  //     })
  //     .catch((err) => console.log(err));
  // });
  return (
    <div className="home-container">
      <Header />
      <Nav />
      {/* {images.map((image) => (
        <div>
          <img src={image.img} alt="" />
        </div>
      ))} */}
      <Hero />
      {/* <video autoPlay loop muted playsInline src=""></video> */}
    </div>
  );
}
