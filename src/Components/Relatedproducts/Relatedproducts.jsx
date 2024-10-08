import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../FeaturedProducts/Featuredproducts.module.css";
import image9 from "../../images/image.png";
import { Circles } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import style from "../Navbar/Navbar.module.css";
import { useContext } from "react";
import { ClickContext } from "../../Context/Clickcontext";
function Featuredproducts() {
  const navigate = useNavigate();
  const [products, setproducts] = useState([]);
  const [visibleproducts, setVisibleproducts] = useState(4);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const arr = ["-30%", "", "-50%", "New", ""];

  let { activeLink, handleLinkClick } = useContext(ClickContext);

  const AddToCartFun = (e) => {
    e.preventDefault();
    navigate("/cart");
    handleLinkClick("/cart");
  };

  const handleShow = () => {
    setVisibleproducts(visibleproducts + 4);
  };

  const getData = async () => {
    try {
      let { data } = await axios.get(
        `https://api.escuelajs.co/api/v1/products`
      );

      setproducts(data);
      setError("");
      setLoading(false);
    } catch (err) {
      setError("Something Wrong , Try Again");
      setproducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.res} style={{ margin: "1px 0px 40px 0px" }}>
      <h1 style={{ marginTop: "12px" }} className={styles.prodtitle}>
        Related Products
      </h1>
      {loading && (
        <div>
          <Circles
            height="80"
            width="80"
            color="#c5a254"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass="margspin py-5"
            visible={true}
          />
        </div>
      )}

      {error ? (
        <h1 className={styles.err}>{error}</h1>
      ) : (
        <div className={styles.featuredcards}>
          {products.slice(0, visibleproducts).map((product, index) => (
            <Link
              to={`/products/${product.id}`}
              key={index}
              onClick={() => handleLinkClick("/shop")}
            >
              <div className={styles.productcard}>
                <img
                  src={
                    product.images[0].startsWith('["') ||
                    product.images[0].startsWith('"')
                      ? image9
                      : product.images.length < 2
                      ? image9
                      : product.images[0]
                  }
                  alt={product.title}
                />{" "}
                <h4 className={styles.h4}>{product.title.slice(0, 16)}</h4>
                <h6 className={styles.category}>{product.category.name}</h6>
                <div className={styles.flex}>
                  <p className={styles.price}>
                    {" "}
                    Rp{" "}
                    {product.price.toString().length > 3
                      ? product.price.toFixed(2)
                      : product.price + ".000"}
                  </p>
                  <p className={styles.oldprice}>Rp {product.price + 10}.000</p>
                </div>
                <div className={styles.cover}>
                  <button
                    className={`${styles.addBtn} ${
                      activeLink === "/cart" ? style.active : ""
                    }`}
                    onClick={AddToCartFun}
                  >
                    Add To Cart
                  </button>
                  <div className={styles.coverIcons}>
                    <div className={styles.share}>
                      <i className="fa-solid fa-share-nodes"></i>

                      <span>Share</span>
                    </div>
                    <div className={styles.share}>
                      <i className="fa-solid fa-right-left"></i>
                      <span>Compare</span>
                    </div>
                    <div className={styles.share}>
                      <i className="fa-regular fa-heart"></i>
                      <span>Like</span>
                    </div>
                  </div>
                </div>
                <div className={styles.top}>
                  <p
                    className={
                      arr[products.indexOf(product) % arr.length] === "New"
                        ? styles.green
                        : arr[products.indexOf(product) % arr.length] ===
                            "-30%" ||
                          arr[products.indexOf(product) % arr.length] === "-50%"
                        ? styles.red
                        : ""
                    }
                  >
                    {arr[products.indexOf(product) % arr.length]}
                  </p>
                </div>
              </div>
            </Link>
          ))}

          {visibleproducts < products.length && (
            <div className={styles.showbtn}>
              <button
                onClick={() => {
                  handleShow();
                }}
              >
                Show More
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Featuredproducts;
