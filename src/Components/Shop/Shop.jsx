import React from "react";
import shopstyle from "./Shop.module.css";
import Commonsectoion from "../Commonsection/Commensection";
import Filtershop from "../Filtershop/Filtershop";
import Products from "../Products/Products";
import Commonparttwo from "../Commnparttwo/Commonparttwo";
function Shop() {
  return (
    <div className={shopstyle.shop}>
      <Commonsectoion page="Shop" home="Home" img={""} />
      <Filtershop />
      <Products />
      <Commonparttwo />
    </div>
  );
}

export default Shop;
