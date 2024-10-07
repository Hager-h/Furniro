import styles from "./Commensection.module.css";
import { Link } from "react-router-dom";
import { ClickContext } from "../../Context/Clickcontext";
import { useContext } from "react";
import style from "../Navbar/Navbar.module.css";

function Commensection({ page, home, img }) {
  let { activeLink, handleLinkClick } = useContext(ClickContext);

  return (
    <div className={styles.commn}>
      <div className={styles.names}>
        <div className={styles.imggg}>
          <img src={img} alt="" />
        </div>
        <h1 className={styles.namePage}>{page}</h1>
        <div className={styles.allPages}>
          <Link
            className={`${styles.homeName} ${
              activeLink === "/" ? style.active : ""
            }`}
            to="/"
            onClick={() => handleLinkClick("/")}
          >
            {home}
          </Link>

          <p className={styles.arrowCommn}>&#x3e;</p>
          <p className={styles.smallPage}>{page}</p>
        </div>
      </div>
    </div>
  );
}

export default Commensection;
