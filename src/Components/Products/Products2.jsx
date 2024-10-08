import styleProduct from "./Products.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../FeaturedProducts/Featuredproducts.module.css";
import { Circles } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ClickContext } from "../../Context/Clickcontext";
import { ShoppingCartContext } from "../../Context/ShoopingCartContext";
import image9 from "../../images/image.png";
import {FavContext}  from "../../Context/Favcontext"

function Products2() {
  const [products, setproducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  let { handleLinkClick } = useContext(ClickContext);
  const { fav, handleFavourites} = useContext(FavContext);

  const { increaseCartQuantity } = useContext(ShoppingCartContext);

  const arr = ["-30%", "", "-50%", "New", ""];

  const AddToCartFun = (e, id) => {
    e.preventDefault();
    increaseCartQuantity(id);
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
    <div className={styleProduct.productShop}>
      <div className={styles.res}>
        {loading && (
          <div style={{ padding: "20px 0px" }}>
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
            {products.slice(17, 33).map((product, index) => (
              <Link to={`/products/${product.id}`} key={index}>
                <div className={styles.productcard} key={product.id}>
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
                    <p className={styles.oldprice}>
                      Rp {product.price + 10}.000
                    </p>
                  </div>
                  <div className={styles.cover}>
                    <button
                      onClick={(e) => AddToCartFun(e, product.id)}
                      className={`${styles.addBtn}`}
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
                      <div className={styles.share}    onClick={(e) => {
      e.preventDefault()
      handleFavourites(product)
    
    }
    
    }>
  <i
    className={`fa-regular fa-heart ${fav.includes(product) ? styles.favColor : ''}`}
 
    style={{ color: fav.includes(product) ? styles.favColor : "" }} 
  ></i>
  <span>
    {fav.includes(product) ? "Dislike" : "Like"} 
  </span>
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

            {!loading && (
              <div className={styleProduct.allNumbers}>
                <div className={styleProduct.numbers}>
                  <div
                    className={styleProduct.numberTwo}
                    onClick={() => {
                      navigate("/shop");
                      window.scrollTo(0, 0);
                    }}
                  >
                    1
                  </div>

                  <div
                    className={styleProduct.activeNumber}
                    onClick={() => {
                      handleLinkClick("/shop2");
                      window.scrollTo(0, 0);
                    }}
                  >
                    2
                  </div>

                  <div
                    className={styleProduct.numberThree}
                    onClick={() => {
                      navigate("/shop3");
                      window.scrollTo(0, 0);
                    }}
                  >
                    3
                  </div>

                  <div
                    className={styleProduct.numberNext}
                    onClick={() => {
                      navigate("/shop4");
                      window.scrollTo(0, 0);
                    }}
                  >
                    Next
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Products2;
