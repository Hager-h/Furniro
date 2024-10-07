import style from "./Productdetails.module.css";
import { Circles } from "react-loader-spinner";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import stars from "../../images/stars.png"
import Relatedproducts from "../Relatedproducts/Relatedproducts"
import x from "../../images/x.png"
import face from "../../images/face.png"
import linked from "../../images/linked.png"
import image9 from "../../images/image.png"
import image10 from "../../images/imagee.png"
import image11 from "../../images/imageee.png"
import { ShoppingCartContext } from "../../Context/ShoopingCartContext";
 import { ClickContext } from "../../Context/Clickcontext";
import { useContext } from "react";


function Productdetails() {
  const [countButton,setCountButton]=useState(1)
  const { id } = useParams();
  const [product, setProduct] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const[mainImg,setMainImg]=useState("")
  const {increaseCartQuantity}=useContext(ShoppingCartContext)
  const {handleLinkClick}=useContext(ClickContext)

  const AddToCartFun = (e, id) => {
    e.preventDefault();
    increaseCartQuantity(id); 
    handleLinkClick("/shop")
  };
const arrayImages=[image9,image10,image11]
  const getData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      setProduct(data);
      setError("");
      setLoading(false);

      if (data.images  && data.images[0] && !data.images[0].startsWith("[\"") &&
      !data.images[0].startsWith("\"")){
        setMainImg(data.images[0]);
      }
      else{
        setMainImg(image9); 
      }

     
  
    } catch (err) {
      setError("Something went wrong, try again");
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);




  const ImgFun = () => {
    if (
      product &&
      product.images &&
      product.images.length >= 2 &&
      !product.images[0].startsWith("[\"") &&
      !product.images[0].startsWith("\"")
    ) {
      return product.images;
    } else {
      return arrayImages;
    }
  };
  
  
  return (

    <div className={style.productDetails}>
      <div className={style.firstSectionCCartDetails}>
        <div className={style.firstSectionCCartDetailsText}>
          <Link className={style.homeNamrProduct} to={"/"}>
            Home
          </Link>
          <p className={style.arrowCommnProduct}>&#x3e;</p>
          <Link className={style.homeNamrProduct} to={"/shop"}>
            Shop
          </Link>
          <p className={style.arrowCommnProduct}>&#x3e;</p>
          <div className={style.borderProduct}></div>
          {product && <p className={style.productName}>{product.title}</p>}
        </div>
      </div>

      {loading && (
        <div>
          <Circles
            height="80"
            width="80"
            color="#B88E2F"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass="margspin py-5"
            visible={true}
          />
        </div>
      )}

      {error && <h1 className={style.err}>{error}</h1>}

      {!loading && product && !error && (
        <div className={style.cartShowing}>
          <div className={style.smallImages}>



            {ImgFun().map((img, index) => (
                <img key={index} src={img || image9}
                
                
                alt={product.title} onClick={()=>{setMainImg(img)}} />
              ))}






          </div>
          <div className={style.bigImage}>
<img src={mainImg} alt={product.title}/>
        </div>


        <div className={style.productDetailsDesc}>
<h1>{product.title}</h1>
<p className={style.price}>

RS.{product.price}.000


</p>
<div className={style.stars}>
<img src={stars} alt="stars"/>
<div className={style.borderProduct}></div>
<p>5 Customer Review</p>


</div>
<p className={style.desc}>{product.description}</p>
<div className={style.size}>
  <p>Size</p>
  <div className={style.sizeButons}>
<button className={style.activeSize}>L</button>
<button className={style.buttonSize}>XL</button>
<button className={style.buttonSize}>XS</button>
</div>
</div>

<div className={style.size}>
  <p>Color</p>
  <div className={style.sizeButons}>
<button className={style.colorSize1}></button>
<button className={style.colorSize2}></button>
<button className={style.colorSize3}></button>

</div>
</div>

<div className={style.importantButoons}>
<div className={style.countButton}>
<p onClick={()=>{
  if(countButton>1){
  setCountButton(countButton-1)
  }else{
    return 1
  }
  }}>-</p>
<p>{countButton}</p>
<p onClick={()=>{
  
  setCountButton(countButton+1)}}>+</p>


</div>
<div className={style.addButton}>
<button                         onClick={(e) => AddToCartFun(e, product.id)}
 >ADD To Cart</button>

</div>
<div className={style.compareButton}>
<p style={{marginRight:"10px"}}>+</p>
<p>Compare
</p>
</div>
</div>

<div className={style.moreDetails}>

<div  className={style.moreDetailsDiv}> SKU : SS001</div>
<div className={style.moreDetailsDiv}> Category :{product.category.name} </div>
<div className={style.moreDetailsDiv}> Tags : {product.category.name}, Clothes,Home,Shop</div>
<div  className={style.moreDetailsDiv} style={{display:"flex", alignItems:"center",justifyContent:"start" }}>
<p> Share : 
</p>
<div className={style.moreDetailsSocial} >
  <img src ={face} alt="face"/> 
  <img src ={linked} alt="linked"/> 
  <img src ={x} alt="x"/> 
</div>
</div>
</div>


</div>



{/* //section 2*/}

        </div>
      )}

<div className={style.line}></div>

<div className={style.secondSectionDesc}>
<div className={style.descReview}>
<p  className={style.descTwo}>Description</p>
<p className={style.descThree}>Additional Information</p>
<p className={style.descThree}>Reviews [5]</p>

        </div>
        <div className={style.descPartTwo}>
<p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
      <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p> 
       
        </div>

      
        </div>



        {!loading && product && !error && (<div className={style.twoImages}>

{ImgFun().slice(0,2).map((img,index)=><img key={index}src={img} alt=""/>)}

        </div>)}


        <div className={style.line}></div>


< Relatedproducts />

    </div>

  );
}

export default Productdetails;
