import style from "./Signin.module.css";
import stylee from "../Contact/Contact.module.css";
import imglogin from "../../images/loginimg3.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Circles } from "react-loader-spinner";
import { Link } from "react-router-dom";

function Signin() {
  let navigate = useNavigate();
  const [loading, setLoding] = useState(false);
  const [err, setErr] = useState("");
  const [sucessmsg, setSuccessmsg] = useState("");

  const loginSubmit = async (values) => {
    setLoding(true);
    let { data } = await axios
      .post(
        `https://api.escuelajs.co/api/v1/products`, values )
      .catch((err) => {
        setLoding(false);
        setSuccessmsg("");
        setErr(err.response.data.message);
      });
    if (data.message === "success") {
      setLoding(false);
      setSuccessmsg("Login Successful, Now You Will Redirect To Home Page");
      setErr("");
      setTimeout(() => {
        navigate(`/`);
      }, 2500);
    }
  };

  const validationSchema = Yup.object({
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
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: loginSubmit,
  });

  return (
    <div className={style.sign}>
      <div className={style.signin}>
        <div className={`${stylee.allDivs} ${style.allDivs2}`}>
          <div className={`${stylee.right} ${style.right2}`}>
            <img src={imglogin} alt="" />
          </div>
          <div className={`${stylee.left} $${style.left2}`}>
            <div className={style.textSign}>
              <h1>Log In</h1>
              <p>
                Don't have an account yet ?{" "}
                <Link to={"/signup"} className={`${style.linkSign} `}>
                  {" "}
                  Sign Up
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
                  type="email "
                  id="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`${stylee.input}  `}
                  placeholder="Email "
                />
              </div>
              {formik.touched.email && formik.errors.email ? (
                <div className={` ${style.messageWrongT}`}>
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
                <div className={`  ${style.messageWrongT}`}>
                  {formik.errors.password}
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
                  Log In
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
