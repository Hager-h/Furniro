import style from "./Filtershop.module.css";
import filter from "../../images/filter.png";
import second from "../../images/second.png";
import third from "../../images/third.png";
function Filtershop() {
  return (
    <div>
      <div className={style.filter}>
        <div className={style.firstsec}>
          <div className={style.fisrtFilterp}>
            <img src={filter} alt="" />
            <p>Filter</p>
          </div>
          <img src={second} alt="" />
          <img src={third} alt="" />

          <div className={style.border}></div>
          <div className={style.showing}>
            <p>Showing 1–16 of 32 results</p>
          </div>
        </div>

        <div className={style.secondSec}>
          <div className={style.numberInput}>
            <p>Show</p>
            <input type="number" placeholder="16" />
          </div>

          <div className={style.sortInput}>
            <p>Short by</p>
            <select>
              <option value="Default">Default</option>
              <option value="Price(L-H)">Price(L-H)</option>
              <option value="Price(H-L)">Price(H-L)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filtershop;
