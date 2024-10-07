
import { createContext, useState } from "react";
export let FavContext = createContext();






function FavContextProvider(props) {
  const [fav,setFav]=useState([])

  const handleFavourites=(product)=>{

    if(fav.includes(product)){
      setFav(fav.filter((favProd)=>(favProd.id!==product.id)))
    }
      else{
        setFav([...fav,product])
      }
    
    }

  

  return (
      <FavContext.Provider value={{ fav,setFav,handleFavourites }}>
        {props.children}
      </FavContext.Provider>
    );
  }


export default FavContextProvider










    