import style from "./Footer.module.css";
import { Link } from "react-router-dom";
import { ClickContext } from "../../Context/Clickcontext";
import { useContext } from "react";
function Footer() {
  let { handleLinkClick } = useContext(ClickContext);

  return (
    <div className={style.footerCont}>
      <div className={style.footer}>
        <div className={style.furniro}>
          <h6 className={style.footerParag}>Funiro.</h6>
          <p className={style.footerSecondParag}>
            400 University Drive Suite 200 Coral Gables,
          </p>
          <p className={style.footerSecondParag2}>FL 33134 USA</p>
        </div>
        <div className={style.links}>
          <p className={style.linksTitle}>Links</p>

          <div className={style.allLinks}>
            <Link
              className={style.link}
              to={"/"}
              onClick={() => handleLinkClick("/")}
            >
              Home
            </Link>
            <Link
              className={style.link}
              to={"/shop"}
              onClick={() => handleLinkClick("/shop")}
            >
              Shop
            </Link>
            <Link
              className={style.link}
              to={"/about"}
              onClick={() => handleLinkClick("/about")}
            >
              About
            </Link>
            <Link
              className={style.link}
              to={"/contact"}
              onClick={() => handleLinkClick("/contact")}
            >
              Contact
            </Link>
          </div>
        </div>
        <div className={style.help}>
          <p className={style.linksTitle}>Help</p>
          <div className={style.allLinks}>
            <Link className={style.link} to={"/"}>
              Payment Options
            </Link>
            <Link className={style.link} to={"/"}>
              Returns
            </Link>
            <Link className={style.link} to={"/"}>
              Privacy Policies
            </Link>
          </div>
        </div>

        <div className={style.news}>
          <p className={style.linksTitle}>Newsletter</p>

          <div className={style.inputs}>
            <input
              className={style.email}
              type="email"
              placeholder="Enter Your Email Address"
            />
            <input
              className={style.sub}
              type="submit"
              placeholder="SUBSCRIBE"
              value={"SUBSCRIBE"}
            />
          </div>
        </div>
      </div>
      <div className={style.copyRight}>
        <p>2024 furino. All rights reverved</p>
      </div>
    </div>
  );
}

export default Footer;
