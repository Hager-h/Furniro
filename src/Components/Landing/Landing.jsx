import stylee from "./Landing.module.css";
import style from "../Navbar/Navbar.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ClickContext } from "../../Context/Clickcontext";
function Landing() {
  let { activeLink, handleLinkClick } = useContext(ClickContext);
  return (
    <div className={stylee.land}>
      <div className={stylee.text}>
        <p className={stylee.firstp}>New Arrival</p>
        <h2 className={stylee.h2}>Discover Our New Collection</h2>
        <p className={stylee.secp}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <Link
          className={`${stylee.btn} ${activeLink === "/shop" ? style.active : ""
            }`}
          to="/shop"
          onClick={() => handleLinkClick("/shop")}
        >
          BUY NOW
        </Link>
      </div>
    </div>
  );
}

export default Landing;
