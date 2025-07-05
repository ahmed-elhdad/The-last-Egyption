"use client";
import React, { useState, useEffect } from "react";
import "../css/3-Hero/3-Hero.css";
function Hero() {
  const [images, setImages] = useState([]);
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const allImages = Array.from(document.querySelectorAll("img")).map(
      (img) => img.src
    );
    setImages(allImages);
  }, []);

  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  const bgStyle =
    images.length > 0
      ? {
          backgroundImage: `url(${images[bgIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 0.5s ease",
        }
      : {};

  return (
    <section className="hero" style={bgStyle}>
      <h1>مرحبًا بك بوابتك لاكتشاف سحر وجمال المعالم السياحية في مصر</h1>
      <p>
        من الأهرامات العظيمة وأبو الهول، إلى معابد الكرنك وفيلة، ومن القاهرة
        الإسلامية إلى الإسكندرية الساحلية – يجمع موقعنا بين التاريخ، والجمال،
        والمعلومة.
      </p>
    </section>
  );
}

export default Hero;
