"use client";
import React, { useState, useEffect } from "react";

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
        {museum.map((museum) => {
          return (
            <div className="museum-card">
              <img src={museum.img} alt="" />
              <h3>{museum.title}({museum.nickName})</h3>
              <p>{museum.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Museums;
