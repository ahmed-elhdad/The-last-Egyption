import React from "react";

const Kings = () => {
  return (
    <section className="kings-container">
      <h2>ملوك مصر القديمة</h2>
      <p>
        تعرّف على أشهر فراعنة مصر الذين تركوا بصماتهم في التاريخ من خلال
        الإنجازات، المعارك، والمعابد التي ما زالت شاهدة على عظمتهم.
      </p>

      <div className="kings-list">
        <div className="king-card">
          <h2>رمسيس الثاني</h2>
          <p>
            أحد أعظم ملوك مصر، حكم لأكثر من 60 عامًا وشيّد العديد من المعابد مثل
            أبو سمبل.
          </p>
        </div>
        <div className="king-card">
          <h2>توت عنخ آمون</h2>
          <p>
            الفرعون الذهبي الذي اشتهر بمقبرته المليئة بالكنوز، واكتُشفت عام
            1922.
          </p>
        </div>
        <div className="king-card">
          <h2>أمنحتب الثالث</h2>
          <p>
            حكم في عصر ازدهار فني وثقافي كبير، وترك تماثيل الكولوسي الضخمة في
            الأقصر.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Kings;
