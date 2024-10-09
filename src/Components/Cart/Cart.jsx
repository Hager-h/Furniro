import style from "./Cart.module.css";
import axios from "axios";
import Commonsectoion from "../Commonsection/Commensection.jsx";
import { useContext } from "react";
import Commonparttwo from "../Commnparttwo/Commonparttwo";
import { FaRegTrashAlt } from "react-icons/fa";
import { useShoppingCart } from "../../Context/ShoopingCartContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ClickContext } from "../../Context/Clickcontext";
import image9 from "../../images/image.png";
import logo from "../../images/logo.png";
import emptyCart from "../../images/empty.png";

import { Bars } from "react-loader-spinner";

function Cart() {
  const { cartItems, setCartItems, removeFromCart } = useShoppingCart();

  let { handleLinkClick } = useContext(ClickContext);

  const { increaseCartQuantity } = useShoppingCart();
  const [products, setproducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleshop = () => {
    navigate("/shop");
    
      window.scrollTo(0, 0);
    
    handleLinkClick("/shop");
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
  }, [cartItems]);

  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, [setCartItems]);

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      localStorage.removeItem("cartItems");
    }
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
    <div className={style.cart}>
      <Commonsectoion page="Cart" home="Home" img={logo} />

      {cartItems.length > 0 ? (
        <>
          <div className={style.tableAndPrice}>
            <div className={style.tablePart}>
              <table className={style.table}>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th className={style.thSu}>Subtotal</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                {loading ? (
    <tr>
      <td colSpan="5">
        <Bars
          height="40"
          width="100"
          color="#c5a254"
          ariaLabel="loading-indicator"
          visible={true}
        />
      </td>
    </tr>
  )

                  :cartItems.map((item) => {
                    const product = products.find(
                      (prod) => prod.id === item.id
                    );
                    if (!product) {
                      return null
                    
                    }

                    return (
                      <tr key={item.id}>
                        <td>
                          <div className={style.info}>
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
                              className={style.cartImgC}
                            />

                            <span className={style.spanTitle}>
                              {product.title.slice(0, 12)}
                            </span>
                          </div>
                        </td>
                        <td className={style.priceCart}>
                          RS.{product.price}.00
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.quantity || 1}
                            min="1"
                            onChange={(e) => {
                              const newQuantity = parseInt(e.target.value);
                              increaseCartQuantity(item.id, newQuantity, true);
                            }}
                          />
                        </td>
                        <td className={style.subTot}>
                          RS.{product.price * (item.quantity || 1)}.00
                        </td>
                        <td>
                          <button
                            className={style.remove}
                            onClick={() => removeFromCart(item.id)}
                          >
                            <FaRegTrashAlt />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className={style.cartTotals}>
              <h2>Cart Totals</h2>
              <div className={style.subTotal}>
                <p>Subtotal </p> <p>Rs. {calculateSubtotal().toFixed(2)}</p>
              </div>
              <div className={style.total}>
                <p>Total </p> <p>Rs. {calculateSubtotal().toFixed(2)}</p>
              </div>
              <Link
                className={style.check}
                to={"/checkout"}
                onClick={() => {
                  window.scroll(0, 0);
                }}
              >
                Check Out
              </Link>
            </div>
          </div>

          <Commonparttwo />
        </>
      ) : (
        <div className={style.empty}>
          <p>Your Cart Is Empty</p>
          <img src={emptyCart} alt="emptycart" />

          <button onClick={handleshop}>Shop Now</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
