"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../styles.css";
function Museums() {
  const [museum, setMuseum] = useState([]);
  useEffect(() => {
    fetch("../../public/data/Museum.json")
      .then((res) => {
        const data = res.json();
        return data;
      })
      .then((data) => {
        setMuseum(data);
      });
  });
  return (
    <div className="museums" id="museums">
      <h2>متاحف مصر</h2>
      <div className="museums-items">
        <Swiper className="swiper" spaceBetween={50} slidesPerView={2}>
          {museum.map((museum) => {
            return (
              <div className="museum-card">
                <SwiperSlide>
                  <h3>
                    {museum.title}({museum.nickName})
                  </h3> 
                  <img src={museum.img} alt="" />
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Museums;
