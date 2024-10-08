import React from "react";
import style from "./Beforefooter.module.css";
import one from "../../images/f1.png";
import two from "../../images/f2.png";
import three from "../../images/f3.png";
import four from "../../images/f4.png";
import middle from "../../images/middle.png";
import five from "../../images/f5.png";
import six from "../../images/f6.png";
import seven from "../../images/f7.png";
import eight from "../../images/f8.png";

function Beforefooter() {
  return (
    <div className={style.beforeFooter}>
      <h4 className={style.beforP}>Share your setup with</h4>
      <h2 className={style.beforPTwo}>#FuniroFurniture</h2>
      <div className={style.allImages}>
        <div className={style.firstImg}>
          <div className={style.first}>
            <img src={one} alt="" />
            <img src={two} alt="" />
          </div>
          <div className={style.second}>
            <img src={three} alt="" />
            <img src={four} alt="" />
          </div>
        </div>

        <div className={style.middleImg} >
          <img src={middle} alt="" />
        </div>

        <div className={style.secondImg}>
          <div className={style.third}>
            <img src={five} alt="" />
            <img src={six} alt="" />
          </div>
          <div className={style.fourth}>
            <img src={seven} alt="" />
            <img src={eight} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Beforefooter;
