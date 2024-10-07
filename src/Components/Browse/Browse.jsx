import React from "react";
import stylish from "./Browse.module.css";
import dining from "../../images/dining.png";
import living from "../../images/living.png";
import bedroom from "../../images/bedroom.png";
function Browse() {
  return (
    <div className={stylish.title}>
      <h2>Browse The Range</h2>
      <p className={stylish.browsep}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className={stylish.category}>
        <div className={stylish.cat}>
          <img src={dining} alt="didnig" />
          <p className={stylish.catp}>Dining</p>
        </div>
        <div className={stylish.cat}>
          <img src={living} alt="living" />
          <p className={stylish.catp}>Living</p>
        </div>
        <div className={stylish.cat}>
          <img src={bedroom} alt="bedroom" />
          <p className={stylish.catp}>Bedroom</p>
        </div>
      </div>
    </div>
  );
}

export default Browse;
