import React, { useState } from "react";
import style from "./Slider.module.css";
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/living.png";
import img4 from "../../images/company.jpg";

function Slider() {
  const images = [img1, img2, img3, img4];
  const NamesOfRoom = ["Bed Room", "Living Room", "Relax Room", "Comp Room"];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((count) => (count + 1) % images.length);
  };

  const setImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={style.slider}>
      <div className={style.fullImage}>
        <img src={images[currentIndex]} alt={"img"} />

        <div className={style.box}>
          <p className={style.firstSlideP}>
            {`0${currentIndex + 1}`} <span className={style.dash}></span>{" "}
            {NamesOfRoom[currentIndex]}
          </p>
          <p className={style.seconSlideP}>Inner Peace</p>
        </div>
        <div className={style.boxArrow} onClick={nextImage}>
          &#x2192;
        </div>
      </div>

      <div className={style.imageAndCircles}>
        <div className={style.halfImage}>
          <img
            style={{ width: "372px", height: "486px" }}
            src={images[(currentIndex + 1) % images.length]}
            alt=""
          />
          <img
            style={{ width: "372px", height: "486px" }}
            src={images[(currentIndex + 2) % images.length]}
            alt=""
          />
          <img
            style={{ width: "372px", height: "486px" }}
            src={images[(currentIndex + 3) % images.length]}
            alt=""
          />
        </div>
        <div className={style.arrow} onClick={nextImage}>
          &#x3e;
        </div>

        <div className={style.circles}>
          {images.map((_, index) => (
            <div
              key={index}
              className={`${style.outer} ${
                index === currentIndex ? style.outerActive : ""
              }`}
              onClick={() => setImage(index)}
            >
              <div
                className={`${style.circle} ${
                  index === currentIndex ? style.circleActive : ""
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
