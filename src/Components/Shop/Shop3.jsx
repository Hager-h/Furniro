import shopstyle from  "./Shop.module.css"
import Commonsectoion from "../Commonsection/Commensection"
import Filtershop from '../Filtershop/Filtershop'
import Products3 from '../Products/Products3.jsx'
import Commonparttwo from '../Commnparttwo/Commonparttwo'

function Shop3() {
  return (
    <div className={shopstyle.shop}>
     <Commonsectoion page="Shop"      home="Home"  img={""}/>
    <Filtershop/>
    <Products3/>
    <Commonparttwo/>

    </div>
  )
}

export default Shop3
