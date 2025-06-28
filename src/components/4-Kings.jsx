"use client";

import React, { useEffect, useState } from "react";

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
      <h2>ملوك مصر القديمة</h2>
      {kings.map((king) => {
        return (
          <div className="king-card">
            <img src={king.img} alt="" />
            <h3>{king.name}</h3>
          </div>
        );
      })}
    </section>
  );
};

export default Kings;
