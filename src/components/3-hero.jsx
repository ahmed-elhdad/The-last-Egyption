// import React, { useEffect } from "react";
// // import img1 from "../../public/images/Ancient/egyptKing1.png";
// function Hero() {
//   const removeAllClasses = () => {
//     const hero = document.querySelector(".hero");
//     if (hero) {
//       hero.classList.remove("bg-image-tootAnkhAmon");
//       hero.classList.remove("bg-image-nevertety");
//       hero.classList.remove("bg-image-ramses");
//       hero.classList.remove("bg-image-kelopatra");
//       hero.classList.remove("bg-image-mina");
//       hero.classList.remove("bg-image-oserkaf");
//       hero.classList.remove("bg-image-khofo");
//       hero.classList.remove("bg-image-khafraa");
//       hero.classList.remove("bg-image-mankaure");
//       hero.classList.remove("bg-image-pyramids1");
//       hero.classList.remove("bg-image-pyramids2");
//       hero.classList.remove("bg-image-pyramids3");
//       hero.classList.remove("bg-image-pyramids4");
//       hero.classList.remove("bg-image-camp1");
//       hero.classList.remove("bg-image-camp2");
//       hero.classList.remove("bg-image-camp3");
//       hero.classList.remove("bg-image-camp4");
//       hero.classList.remove("bg-image-coralReefs1");
//       hero.classList.remove("bg-image-coralReefs2");
//       hero.classList.remove("bg-image-coralReefs3");
//       hero.classList.remove("bg-image-airPalon1");
//       hero.classList.remove("bg-image-airPalon2");
//       hero.classList.remove("bg-image-maabed1");
//       hero.classList.remove("bg-image-maabed2");
//       hero.classList.remove("bg-image-maabed3");
//       hero.classList.remove("bg-image-maabed4");
//       hero.classList.remove("bg-image-maabed5");
//       hero.classList.remove("bg-image-image1");
//       hero.classList.remove("bg-image-image2");
//       hero.classList.remove("bg-image-image3");
//     }
//   };
//   // removeAllClasses();
//   const allImages = document.querySelectorAll("img");
//   const imagesArray = Array.from(allImages).map((img) => img.src);
//   useEffect(() => {
//     setTimeout(() => {
//       removeAllClasses();
//       const hero = document.querySelector(".hero");
//       console.log(hero);

//       if (!hero) {
//         for (let i = 0; i < imagesArray.length; i++) {
//           if (imagesArray[i].includes("pyramids")) {
//             for (let j = 1; j < 4; j++) {
//               hero.classList.add(`bg-image-pyramids${j}`);
//             }
//             break;
//           }
//         }
//       }
//     }, 1000);
//     setInterval(() => {});
//   });
//   return (
//     <section className="hero">
//       <h1>مرحبًا بك بوابتك لاكتشاف سحر وجمال المعالم السياحية في مصر</h1>

//       <p>
//         من الأهرامات العظيمة وأبو الهول، إلى معابد الكرنك وفيلة، ومن القاهرة
//         الإسلامية إلى الإسكندرية الساحلية – يجمع موقعنا بين التاريخ، والجمال،
//         والمعلومة.
//       </p>
//     </section>
//   );
// }

// export default Hero;

import React, { useEffect, useState } from "react";

// function Hero() {
//   const bgClasses = [
//     "bg-image-pyramids1",
//     "bg-image-pyramids2",
//     "bg-image-pyramids3",
//     "bg-image-pyramids4",
//   ];
//   const [bgIndex, setBgIndex] = useState(0);

//   useEffect(() => {
//     const hero = document.querySelector(".hero");
//     if (!hero) return;

//     // Remove all bg classes
//     bgClasses.forEach((cls) => hero.classList.remove(cls));
//     // Add current bg class
//     hero.classList.add(bgClasses[bgIndex]);

//     // Set up interval for swapping
//     const interval = setInterval(() => {
//       setBgIndex((prev) => (prev + 1) % bgClasses.length);
//     }, 2000); // Change image every 2 seconds

//     // Cleanup
//     return () => {
//       clearInterval(interval);
//       bgClasses.forEach((cls) => hero.classList.remove(cls));
//     };
//   }, [bgIndex]);

//   return (
//     <section className="hero">
//       <h1>مرحبًا بك بوابتك لاكتشاف سحر وجمال المعالم السياحية في مصر</h1>
//       <p>
//         من الأهرامات العظيمة وأبو الهول، إلى معابد الكرنك وفيلة، ومن القاهرة
//         الإسلامية إلى الإسكندرية الساحلية – يجمع موقعنا بين التاريخ، والجمال،
//         والمعلومة.
//       </p>
//     </section>
//   );
// }

// export default Hero;

function Hero() {
  const [images, setImages] = useState([]);
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    // Collect all image srcs on mount
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
