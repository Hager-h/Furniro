import style from "./Commonparttwo.module.css";
import comm1 from "../../images/comm1.png";
import comm2 from "../../images/comm2.png";
import comm3 from "../../images/comm3.png";
import comm4 from "../../images/comm4.png";
function Commonparttwo() {
  return (
    <div className={style.commPartwo}>
      <div className={style.comm}>
        <div className={style.imageCom}>
          <img src={comm1} alt="" />
        </div>
        <div className={style.textComm}>
          <h4 className={style.textCommTitle}>High Quality</h4>
          <p className={style.textCommParag}>crafted from top materials</p>
        </div>
      </div>

      <div className={style.comm}>
        <div className={style.imageCom}>
          <img src={comm2} alt="" />
        </div>
        <div className={style.textComm}>
          <h4 className={style.textCommTitle}>Warranty Protection</h4>
          <p className={style.textCommParag}>Over 2 years</p>
        </div>
      </div>

      <div className={`${style.comm} ${style.commSpecial}`}>
      <div className={style.imageCom}>
          <img src={comm3} alt="" />
        </div>
        <div className={style.textComm}>
          <h4 className={style.textCommTitle}>Free Shipping</h4>
          <p className={style.textCommParag}>Order over 150 $</p>
        </div>
      </div>

      <div className={style.comm}>
        <div className={style.imageCom}>
          <img src={comm4} alt="" />
        </div>
        <div className={style.textComm}>
          <h4 className={style.textCommTitle}>24 / 7 Support</h4>
          <p className={style.textCommParag}>Dedicated support</p>
        </div>
      </div>
    </div>
  );
}

export default Commonparttwo;
