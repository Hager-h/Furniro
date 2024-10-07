import React from "react";
import style from "../Signin/Signin.module.css";
import imglogin from "../../images/loginimg3.jpg";
import stylish from "./Signup.module.css";
import stylee from "../Contact/Contact.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Circles } from "react-loader-spinner";
function Signup() {
  let navigate = useNavigate();
  const [loading, setLoding] = useState(false);
  const [err, setErr] = useState("");
  const [sucessmsg, setSuccessmsg] = useState("");

  const register = async (values) => {
    setLoding(true);
    let { data } = await axios
      .post(`https://api.escuelajs.co/api/v1/products`, values)
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

    password: Yup.string()
      .required("Password is required")

      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character"
      ),

    rePassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required(" Repassword Is Required"),
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
    },
    validationSchema,
    onSubmit: register,
  });

  return (
    <div className={stylish.sign}>
      <div className={style.signin}>
        <div className={`${stylee.allDivs} ${style.allDivs2}`}>
          <div className={`${stylee.right} ${style.right2}`}>
            <img src={imglogin} alt="" />
          </div>
          <div className={`${stylee.left} $${style.left2}`}>
            <div className={style.textSign}>
              <h1>Sign Up</h1>
              <p>
                Already Have An Account?{" "}
                <Link to={"/signin"} className={`${style.linkSign} `}>
                  {" "}
                  Log In
                </Link>
              </p>
            </div>

            <form className="" onSubmit={formik.handleSubmit}>
              {err ? <div className={stylee.errMsg}>{err}</div> : ""}
              {sucessmsg && (
                <div className={` ${stylee.sucessMsg}`}>{sucessmsg}</div>
              )}

              <div className={`${stylee.flexDiv} ${style.signinInput} `}>
                <input
                  type="text"
                  id="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`${stylee.input}  `}
                  placeholder=" Your Name"
                />
              </div>
              {formik.touched.name && formik.errors.name ? (
                <div
                  className={` ${stylee.messageWrong} ${style.messageWrongT}`}
                >
                  {formik.errors.name}
                </div>
              ) : null}

              <div className={`${stylee.flexDiv} ${style.signinInput} `}>
                <input
                  type="email "
                  id="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`${stylee.input}  `}
                  placeholder="Email "
                />
              </div>
              {formik.touched.email && formik.errors.email ? (
                <div
                  className={` ${stylee.messageWrong} ${style.messageWrongT}`}
                >
                  {formik.errors.email}
                </div>
              ) : null}

              <div className={`${stylee.flexDiv} ${style.signinInput} `}>
                <input
                  type="password"
                  id="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`${stylee.input}  `}
                  placeholder=" Password"
                />
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div
                  className={` ${stylee.messageWrong} ${style.messageWrongT}`}
                >
                  {formik.errors.password}
                </div>
              ) : null}

              <div className={`${stylee.flexDiv} ${style.signinInput} `}>
                <input
                  type="password"
                  id="rePassword"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`${stylee.input}  `}
                  placeholder="  Re Password"
                />
              </div>
              {formik.touched.rePassword && formik.errors.rePassword ? (
                <div
                  className={` ${stylee.messageWrong} ${style.messageWrongT}`}
                >
                  {formik.errors.rePassword}
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
                <button
                  style={{ background: "black", border: "none" }}
                  type="submit"
                  className={stylee.submitButton}
                >
                  Sign Up
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
