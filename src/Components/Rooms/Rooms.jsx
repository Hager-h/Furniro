import Slider from "../Slider/Slider";
import style from "./Rooms.module.css";

function Rooms() {
  return (
    <div className={style.room}>
      <div className={style.textRoom}>
        <h1 className={style.roomp}>50+ Beautiful rooms inspiration</h1>
        <p className={style.paragraph}>
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>

        <button className={style.buttonroom}>Explore More</button>
      </div>

      <div>
        <Slider />
      </div>
    </div>
  );
}

export default Rooms;
