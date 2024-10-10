import React, { useEffect, useState } from "react";
import style from "./Shoppingcart.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import shopping from "../../images/shopping.png";
import close from "../../images/colse.png";
import emptyCart from "../../images/empty.png";
import { Bars } from "react-loader-spinner";
import { ShoppingCartContext } from "../../Context/ShoopingCartContext";
import { useContext } from "react";
import image9 from "../../images/image.png";
import { ClickContext } from "../../Context/Clickcontext";
function Shoppingcart({ setIsCartOpen, isCartOpen, setIsCart }) {
  const { cartItems, removeFromCart } = useContext(ShoppingCartContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  let { handleLinkClick } = useContext(ClickContext);

  const getData = async () => {
    try {
      let { data } = await axios.get(
        `https://api.escuelajs.co/api/v1/products`
      );
      setProducts(data);
      setError("");
      setLoading(false);
    } catch (err) {
      setError("Something Wrong , Try Again");
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [cartItems]);

  const calculateSubtotal = () => {
    if (!cartItems || cartItems.length === 0 || products.length === 0) {
      return 0;
    }

    return cartItems.reduce((total, item) => {
      const product = products.find((prod) => prod.id === item.id);
      const price = product ? product.price : 0;
      return total + price * item.quantity;
    }, 0);
  };

  return (
    <div className={style.shopCart}>
      <div className={style.shoppingcart}>
        <div className={style.titleShopping}>
          <h2>Shopping Cart</h2>
          <img
            className={style.close}
            src={shopping}
            alt="shopping cart"
            onClick={() => {
              setIsCartOpen(!isCartOpen);
            }}
          />
        </div>
        <div className={style.containerShop}>
          {cartItems.length > 0 ? (
            cartItems.map((item) => {
              const product = products.find((prod) => prod.id === item.id);
              if (!product) {
                return null;
              }

              return loading ? (
                <div key={item.id}>
                  <Bars
                    height="40"
                    width="100"
                    color="#c5a254"
                    visible={true}
                  />
                </div>
              ) : (
                <div className={style.shoppingProd} key={item.id}>
                  <img
                    className={style.prodShoppingImg}
                    src={
                      product.images[0].startsWith('["') ||
                      product.images[0].startsWith('"')
                        ? image9
                        : product.images.length < 2
                        ? image9
                        : product.images[0]
                    }
                    alt={product.title}
                  />
                  <div className={style.shoppingName}>
                    <h3>{product.title.slice(0, 9)}</h3>
                    <p>
                      {item.quantity} x{" "}
                      <span style={{ margin: "0px 5px" }}></span>
                      <span className={style.priceSpan}>
                        Rs.
                        {product.price.toString().length > 3
                          ? product.price.toFixed(2)
                          : product.price + ".000"}
                      </span>{" "}
                    </p>
                  </div>
                  <img
                    className={style.close}
                    src={close}
                    alt=""
                    onClick={() => removeFromCart(item.id)}
                  />
                </div>
              );
            })
          ) : (
            <div className={style.emptyShopping}>
              <p>Your Cart Is Empty</p>
              <img src={emptyCart} alt="empty cart" />
              <button
                onClick={() => {
                  navigate("/shop");

                  window.scrollTo(0, 0);
                  setIsCartOpen(false);
                  handleLinkClick("/shop");
                }}
              >
                {" "}
                Shop Now
              </button>
            </div>
          )}
        </div>

        <div className={style.bottomShop}>
          {cartItems.length > 0 ? (
            <div className={style.shoppingSubtotal}>
              <p>Subtotal</p>
              <p>Rs.{calculateSubtotal().toFixed(2)}</p>
            </div>
          ) : (
            ""
          )}
          <div
            className={style.buttonsShopping}
            style={{ marginBottom: "20px" }}
          >
            <button
              onClick={() => {
                setIsCart(true);

                navigate("/cart");
                window.scrollTo(0, 0);
                setIsCartOpen(false);
              }}
            >
              Cart
            </button>
            <button
              onClick={() => {
                navigate("/checkout");
                window.scrollTo(0, 0);
                setIsCartOpen(false);
              }}
            >
              Checkout
            </button>
            <button>Comparison</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shoppingcart;
