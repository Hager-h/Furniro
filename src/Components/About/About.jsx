import style from "./About.module.css";
import logo from "../../images/logo.png";
import Commonsectoion from "../Commonsection/Commensection.jsx";
import products from "../../data.json";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ClickContext } from "../../Context/Clickcontext";
function About() {
  let { handleLinkClick,        
  } = useContext(ClickContext);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div className={style.about}>
      <Commonsectoion page="About" home="Home" img={logo} />

      <h2>Furniro Company</h2>
      <p className={style.par}>
        We are a distinguished company with many products. You can take a tour
        on our website
      </p>
      <div className={style.slider}>
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all 2s"
          transitionDuration={5000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="dot"
          itemClass="carousel"
        >
          {products.products.map((prod) => (
            <img
              src={prod.img}
              key={prod.id}
              alt={prod.name}
              style={{ width: "400px", height: "400px" }}
            />
          ))}
        </Carousel>
        
      </div>

      <Link
        className={style.aboutBtn}
        to={"/contact"}
        onClick={() => {

          handleLinkClick("/contact");
         
        }


        }
      >
        Contact us
      </Link>
    </div>
  );
}

export default About;
