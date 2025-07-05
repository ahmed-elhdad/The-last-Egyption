"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../styles.css";
const Kings = () => {
  const [kings, setKings] = useState([]);
  useEffect(() => {
    fetch("../../public/data/kings.json")
      .then((response) => {
        const data = response.json();
        return data;
      })
      .then((data) => {
        setKings(data);
      });
  });
  return (
    <section className="kings-container">
      <div className="name">
        <h2>ملوك مصر القديمة</h2>
      </div>
      <div className="kings">
        <Swiper className="swiper" spaceBetween={50} slidesPerView={2}>
          {kings.map((king) => {
            return (
              <div className="king-card">
                <SwiperSlide>
                  <h3>{king.name}</h3>
                  <img src={king.img} alt="" />
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Kings;
