import styles from "../FeaturedProducts/Featuredproducts.module.css";
import styley from "./Fav.module.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavContext } from "../../Context/Favcontext";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Circles } from "react-loader-spinner";
import image9 from "../../images/image.png";
import { ShoppingCartContext } from "../../Context/ShoopingCartContext";
function Fav() {
  const [products, setproducts] = useState([]);

  const [visibleproducts, setVisibleproducts] = useState(8);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { increaseCartQuantity } = useContext(ShoppingCartContext);
  const { fav, setFav, handleFavourites } = useContext(FavContext);

  const arr = ["-30%", "", "-50%", "New", "", "New"];

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
    <div className={styley.fav}>
        {fav.length>0  ?<div className={styles.res}>
      <h1 className={styles.prodtitle}>My Favourite Products</h1>

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
        <div className={styles.featuredcards} style={{marginBottom:"45px"}}>
          {fav.map((product, index) => (
            <Link to={`/products/${product.id}`} key={index}>
              <div className={styles.productcard}>
                <img
                  loading="lazy"
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
                    <div
                      className={styles.share}
                      onClick={(e) => {
                        e.preventDefault();
                        handleFavourites(product);
                      }}
                    >
                      <i
                        className={`fa-regular fa-heart ${
                          fav.includes(product) ? styles.favColor : ""
                        }`}
                        style={{
                          color: fav.includes(product) ? styles.favColor : "",
                        }}
                      ></i>
                      <span>{fav.includes(product) ? "Dislike" : "Like"}</span>
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
        </div>
      )}
    </div>  :  <div style={{margin:"150px 0px"}}>
    <h1 className={styles.prodtitle}>        No Favourites Yet
 !    </h1>

    </div>}
    
   
    </div>
  );
}

export default Fav;
