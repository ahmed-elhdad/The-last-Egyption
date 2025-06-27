import React from "react";
// import img1 from "../../public/images/Ancient/egyptKing1.png";
function Hero() {
  const removeAllClasses = () => {
    const hero = document.querySelector(".hero");
    if (hero) {
      hero.classList.remove("bg-image-tootAnkhAmon");
      hero.classList.remove("bg-image-nevertety");
      hero.classList.remove("bg-image-ramses");
      hero.classList.remove("bg-image-kelopatra");
      hero.classList.remove("bg-image-mina");
      hero.classList.remove("bg-image-oserkaf");
      hero.classList.remove("bg-image-khofo");
      hero.classList.remove("bg-image-khafraa");
      hero.classList.remove("bg-image-mankaure");
      hero.classList.remove("bg-image-pyramids1");
      hero.classList.remove("bg-image-pyramids2");
      hero.classList.remove("bg-image-pyramids3");
      hero.classList.remove("bg-image-pyramids4");
      hero.classList.remove("bg-image-camp1");
      hero.classList.remove("bg-image-camp2");
      hero.classList.remove("bg-image-camp3");
      hero.classList.remove("bg-image-camp4");
      hero.classList.remove("bg-image-coralReefs1");
      hero.classList.remove("bg-image-coralReefs2");
      hero.classList.remove("bg-image-coralReefs3");
      hero.classList.remove("bg-image-airPalon1");
      hero.classList.remove("bg-image-airPalon2");
      hero.classList.remove("bg-image-maabed1");
      hero.classList.remove("bg-image-maabed2");
      hero.classList.remove("bg-image-maabed3");
      hero.classList.remove("bg-image-maabed4");
      hero.classList.remove("bg-image-maabed5");
      hero.classList.remove("bg-image-image1");
      hero.classList.remove("bg-image-image2");
      hero.classList.remove("bg-image-image3");
    }
  };
  // removeAllClasses();
  return (
    <section className="hero bg-image-camp1">
      <h1>اكتشف أسرار حضارة امتدت آلاف السنين</h1>

      <h2>نبذة عن الموقع</h2>
      <p>
        موقع "مصر القديمة" يقدم لك رحلة فريدة عبر الزمان لاكتشاف الملوك،
        المعابد، والأساطير التي صنعت أعظم حضارة عرفها التاريخ.
      </p>
    </section>
  );
}

export default Hero;
