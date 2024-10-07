import style from "./Checkout.module.css";
import logo from "../../images/logo.png";
import Commnparttwo from "../Commnparttwo/Commonparttwo";
import Commonsectoion from "../Commonsection/Commensection";
function Checkout() {
  return (
    <div className={style.checkout}>
      <Commonsectoion page="Checkout" home="Home" img={logo} />
      <div className={style.checkoutDetails}>
        <div className={style.leftSection}>
          <h3>Billing details</h3>
          <div className={style.twoLables}>
            <div className={style.firstName}>
              <label>First Name</label>
              <input type="text" />
            </div>
            <div className={style.firstName}>
              <label>Last Name</label>
              <input type="text" />
            </div>
          </div>

          <div className={style.restLabels}>
            <div className={style.lableRest}>
              <label>Company Name (Optional)</label>
              <input type="text" />
            </div>

            <div className={`${style.lableRest} ${style.country}`}>
              <label>Country / Region</label>
              <select>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Malaysia">Malaysia</option>

                <option value="Korea">Korea</option>
                <option value="Egypt">Egypt</option>
              </select>
            </div>

            <div className={style.lableRest}>
              <label>Street address</label>
              <input type="text" />
            </div>

            <div className={style.lableRest}>
              <label>Town / City</label>
              <input
                type="text
"
              />
            </div>

            <div className={`${style.lableRest} ${style.country}`}>
              <label>Province</label>
              <select>
                <option value="Western Province">Western Province</option>
                <option value="Galle">Galle</option>

                <option value="Kandy">Kandy</option>
                <option value="Colombo">Colombo</option>
              </select>
            </div>

            <div className={style.lableRest}>
              <label>ZIP code</label>
              <input type="number" />
            </div>

            <div className={style.lableRest}>
              <label>Phone</label>
              <input type="tel" />
            </div>

            <div className={style.lableRest}>
              <label>Email address</label>
              <input type="email" />
            </div>

            <div className={style.lableRest}>
              <label></label>
              <input
                type="text"
                placeholder="Additional information"
                className={style.additional}
              />
            </div>
          </div>
        </div>

        <div className={style.rightSection}>
          <div className={style.rightSectionFirst}>
            <div className={style.one}>
              <p>Product</p>
              <p>Subtotal</p>
            </div>
            <div className={style.two}>
              <p>
                Asgaard sofa <span> X 1</span>
              </p>
              <p>Rs. 250,000.00</p>
            </div>

            <div className={style.three}>
              <p>Subtotal</p>
              <p>Rs. 250,000.00</p>
            </div>
            <div className={style.four}>
              <p>Total</p>
              <p>Rs. 250,000.00</p>
            </div>
          </div>
          <div className={style.line}></div>

          <div className={style.rightSectionSecond}>
            <div className={style.titleCheck}>
              <p></p>
              <h4>Direct Bank Transfer</h4>
            </div>
            <p className={style.pCheck}>
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>

            <div className={style.titleCheck2}>
              <p></p>
              <h4>Direct Bank Transfer</h4>
            </div>

            <div className={style.titleCheck2}>
              <p></p>
              <h4>Cash On Delivery </h4>
            </div>

            <p className={style.checkTwoP}>
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our <span>privacy policy.</span>
            </p>

            <button className={style.btnCheck}>Place order</button>
          </div>
        </div>
      </div>
      <Commnparttwo />
    </div>
  );
}

export default Checkout;
