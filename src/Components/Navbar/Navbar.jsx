import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./Navbar.module.css";
import logo from "../../images/logo.png";
import account from "../../images/Vector.png";
import heart from "../../images/heart.png";
import search from "../../images/search.png";
import cartimg from "../../images/cartimage.png";
import { ClickContext } from "../../Context/Clickcontext";
import Shoppingcart from "../Shoppingcart/Shoppingcart";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/ShoopingCartContext";
export default function Navbar() {
  let { activeLink, setActiveLink, handleLinkClick, isOpen, toggleMenu } =
    useContext(ClickContext);
  let { cartQuantity } = useContext(ShoppingCartContext);
  const location = useLocation();

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCart, setIsCart] = useState(false);
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    if (isOpen) {
      toggleMenu();
    }
  };

  useEffect(() => {
    if (location.pathname === "/cart") {
      setIsCart(true);
      setActiveLink(false);
    } else {
      setIsCart(false);
    }
  }, [location.pathname]);

  return (
    <>
      <div style={{ zIndex: "10000" }} className={`${style.header} `}>
        <div className={style.logo}>
          <span className={style.new}>
            <img src={logo} alt={"Logo"} />
          </span>
          <span className={style.logotext}>Furniro</span>
        </div>
        <div className={style.mobile} onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className={`${style.alllink} ${isOpen ? `${style.active}` : ""}`}>
          <div className={style.ulLinks}>
            <i className={style.close} onClick={toggleMenu}>
              <i className="fa-regular fa-circle-xmark"></i>
            </i>
            <ul>
              <img
                className={`${style.show} ${isOpen ? `${style.activeimg}` : ""
                  }`}
                src={logo}
                alt={"Logo "}
                style={{ textAlign: "center", margin: "68px 0px 30px 10px" }}
              />

              <li>
                <Link
                  className={location.pathname === "/" ? `${style.active}` : ""}
                  to="/"
                  onClick={() => handleLinkClick("/")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={activeLink === "/shop" ? `${style.active}` : ""}
                  to="/shop"
                  onClick={() => handleLinkClick("/shop")}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/about" ? `${style.active}` : ""
                  }
                  to="/about"
                  onClick={() => handleLinkClick("/about")}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/contact" ? `${style.active}` : ""
                  }
                  to="/contact"
                  onClick={() => handleLinkClick("/contact")}
                >
                  Contact
                </Link>
              </li>

              <div className={style.icons}>
                <li>
                  <Link
                    className={
                      location.pathname === "/signin" ? `${style.active}` : ""
                    }
                    to="/signin"
                    onClick={() => handleLinkClick("/signin")}
                  >
                    <img src={account} alt="user-image" />
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      location.pathname === "/search" ? `${style.active}` : ""
                    }
                    to="/search"
                    onClick={() => handleLinkClick("/search")}
                  >
                    <img src={search} alt="search-image" />
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      location.pathname === "/fav" ? `${style.active}` : ""
                    }
                    to="/fav"
                    onClick={() => handleLinkClick("/fav")}
                  >
                    <img src={heart} alt="heart" />
                  </Link>
                </li>
                <li className={style.cartDiv}>
                  <div
                    onClick={toggleCart}
                    className={`${isCart ? style.imageActive : ""} ${isCartOpen ? style.imageActive : ""}`}
                    >
                    <img src={cartimg} alt="cart-image"  />
                  </div>
                  {cartQuantity > 0 && (
                    <div className={style.cartCircle}>{cartQuantity}</div>
                  )}
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>

      {isCartOpen && <div className={style.overlay} onClick={toggleCart}></div>}

      {isCartOpen && (
        <Shoppingcart
          isCartOpen={isCartOpen}
          toggleCart={toggleCart}
          setIsCartOpen={setIsCartOpen}
          isCart={isCart}
          setIsCart={setIsCart}
        />
      )}
    </>
  );
}
