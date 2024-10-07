import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import { Circles } from "react-loader-spinner";
import Commnparttwo from "../Commnparttwo/Commonparttwo.jsx";
import Commonsectoion from "../Commonsection/Commensection.jsx";
import logo from "../../images/logo.png";
import stylee from "./Contact.module.css";
import clock from "../../images/clock.png";
import phone from "../../images/phone.png";
import locate from "../../images/locate.png";
import { useNavigate } from "react-router-dom";
function Contact() {
  let navigate = useNavigate();
  const [loading, setLoding] = useState(false);
  const [err, setErr] = useState("");
  const [sucessmsg, setSuccessmsg] = useState("");

  const register = async (values) => {
    setLoding(true);
    let { data } = await axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values)
      .catch((err) => {
        setLoding(false);
        setSuccessmsg("");

        setErr(err.response.data.message);
      });
    console.log(data);
    if (data.message === "success") {
      setLoding(false);
      setSuccessmsg(
        "Your Account Was Created, Now You Will Redirect To Sign In Page"
      );
      setErr("");

      setTimeout(() => {
        navigate(`/signin`);
      }, 2500);
    }
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(4, "Too Short!")
      .max(20, "Too Long!")
      .required(" Name Is Required"),

    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email format"
      )
      .required("Email is required"),

    message: Yup.string()
      .min(10, "Too Short!")
      .max(1000, "Too Long!")
      .required("Write Avalid Message"),
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",

      message: "",
    },
    validationSchema,
    onSubmit: register,
  });

  return (
    <div className={stylee.contact}>
      <Commonsectoion page="Contact" home="Home" img={logo} />

      <div className={stylee.contactDiv}>
        <h3>Get In Touch With Us</h3>
        <p>
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>
      <div className={stylee.allDivs}>
        <div className={stylee.right}>
          <div className={stylee.iconDiv}>
            <img src={locate} alt="" />
            <div className={stylee.textDiv}>
              <p>Address</p>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>

          <div className={stylee.iconDiv}>
            <img src={phone} alt="" />
            <div className={stylee.textDiv}>
              <p>Phone</p>
              <p>Mobile: +(84) 546-6789 </p>

              <p>Hotline: +(84) 456-6789</p>
            </div>
          </div>

          <div className={stylee.iconDiv}>
            <img src={clock} alt="" />
            <div className={stylee.textDiv}>
              <p>Working Time</p>

              <p> Monday-Friday: 9:00 - 22:00</p>
              <p> Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>
        <div className={stylee.left}>
          <form className="" onSubmit={formik.handleSubmit}>
            {err ? <div className={stylee.errMsg}>{err}</div> : ""}
            {sucessmsg && (
              <div className={` ${stylee.sucessMsg}`}>{sucessmsg}</div>
            )}
            <div className={stylee.flexDiv}>
              <label htmlFor="name">Your name</label>
              <input
                type="text "
                id="name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                className={stylee.input}
                placeholder="Abc"
              />
            </div>
            {formik.touched.name && formik.errors.name ? (
              <div className={` ${stylee.messageWrong}   `}>
                {formik.errors.name}
              </div>
            ) : null}

            <div className={stylee.flexDiv}>
              <label htmlFor="email">Email address</label>
              <input
                type="email "
                id="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={stylee.input}
                placeholder="Abc@def.com"
              />
            </div>
            {formik.touched.email && formik.errors.email ? (
              <div className={` ${stylee.messageWrong}`}>
                {formik.errors.email}
              </div>
            ) : null}

            <div className={stylee.flexDiv}>
              <label htmlFor="subject">Subject</label>
              <input
                type="text "
                id="subject"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={stylee.input}
                placeholder="This is an optionalAbc@def.com"
              />
            </div>
            {formik.touched.subject && formik.errors.subject ? (
              <div className={` ${stylee.messageWrong}`}>
                {formik.errors.subject}
              </div>
            ) : null}

            <div className={stylee.flexDiv}>
              <label htmlFor="message">Message</label>
              <input
                type="text "
                id="message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={stylee.inputMsg}
                placeholder="Hi! i’d like to ask about"
              />
            </div>
            {formik.touched.message && formik.errors.message ? (
              <div className={` ${stylee.messageWrong}`}>
                {formik.errors.message}
              </div>
            ) : null}

            {loading ? (
              <Circles
                height="80"
                width="80"
                color="#B88E2F"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass="margspin"
                visible={true}
              />
            ) : (
              <button type="submit" className={stylee.submitButton}>
                Submit
              </button>
            )}
          </form>
        </div>
      </div>

      <Commnparttwo />
    </div>
  );
}

export default Contact;
