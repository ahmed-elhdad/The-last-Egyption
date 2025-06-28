import React, { useEffect, useState } from "react";

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
        {images.map((image) => (
          <div>
            <img src={image.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Images;
