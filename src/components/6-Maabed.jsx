"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../css/6-Maabed/6-Maabed.css";
import "swiper/css";
import "../styles.css";
function Maabed() {
  const [maabed, setMaabed] = useState([]);
  fetch("../../public/data/Maabed.json")
    .then((res) => {
      const data = res.json();
      return data;
    })
    .then((data) => {
      setMaabed(data);
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <section className="maabeed-container">
      <h2>المعابد</h2>
      <div className="maabed">
        <Swiper className="swiper" spaceBetween={50} slidesPerView={2}>
          <div className="maabd-card">
            {maabed.map((Maabd) => {
              return (
                <SwiperSlide>
                  <h1>{Maabd.name}</h1>
                  <img src={Maabd.img} alt="" />
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </section>
  );
}

export default Maabed;
