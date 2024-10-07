import style from "./Search.module.css";
import { CiSearch } from "react-icons/ci";
import Commonsectoion from "../Commonsection/Commensection";
import logo from "../../images/logo.png";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import axios from "axios";
import styles from "../FeaturedProducts/Featuredproducts.module.css";
import { Bars } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import image9 from "../../images/image.png";
import { ClickContext } from "../../Context/Clickcontext";

function Search() {
  const handleChange = (value) => {
    setInputValue(value);
    setLoading(true);
    getData(value);
  };

  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const [products, setproducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const arr = ["-30%", "", "-50%", "New", ""];

  let { activeLink, handleLinkClick } = useContext(ClickContext);

  const AddToCartFun = (e) => {
    e.preventDefault();
    navigate("/cart");
    handleLinkClick("/cart");
  };

  const getData = async (value) => {
    try {
      let { data } = await axios.get(
        `https://api.escuelajs.co/api/v1/products`
      );
      data = data.filter((prod) => {
        return (
          value &&
          prod &&
          prod.title.slice(0, 12) &&
          (prod.title.slice(0, 12).toLowerCase().includes(value) ||
            prod.title.slice(0, 12).toUpperCase().includes(value))
        );
      });

      setproducts(data);
      setError("");
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
    <div className={style.search}>
      <Commonsectoion page="Search" home="Home" img={logo} />
      <h2>What are You Looking For ?</h2>
      <div className={style.inputSearch}>
        <CiSearch />

        <input
          type="text"
          placeholder="Seach ..."
          value={inputValue}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <div className={styles.res} style={{ marginTop: "70px" }}>
        {loading && (
          <div>
            <Bars
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
            {products.map((product, index) => (
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
                  <h4 className={styles.h4}>{product.title.slice(0, 12)}</h4>
                  <h6 className={styles.category}>{product.category.name}</h6>
                  <div className={styles.flex}>
                    <p className={styles.price}>Rp {product.price}.0000</p>
                    <p className={styles.oldprice}>
                      Rp {product.price + 10}.0000
                    </p>
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
                            arr[products.indexOf(product) % arr.length] ===
                              "-50%"
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
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
