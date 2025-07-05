"use client ";

import React, { useEffect, useState } from "react";
import "swiper/css";
import "../styles.css";
import "../css/7-Images/7-Images.css";
import { Swiper, SwiperSlide } from "swiper/react";
function Images() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("/public/data/imagesSlider.json")
      .then((req) => {
        let data = req.responseText;
        data = req.json();
        return data;
      })
      .then((data) => {
        setImages(data);
      })
      .catch((err) => console.log(err));
  });
  return (
    <div className="images-container" id="images">
      <h2>معرض الصور</h2>
      <div className="images-items">
        <Swiper className="swiper" spaceBetween={50} slidesPerView={4}>
          {images.map((image) => (
            <SwiperSlide>
              <img src={image.img} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Images;
