import shopstyle from  "./Shop.module.css"
import Commonsectoion from "../Commonsection/Commensection"
import Filtershop from '../Filtershop/Filtershop'
import Products4 from '../Products/Products4.jsx'
import Commonparttwo from '../Commnparttwo/Commonparttwo'

function Shop4() {
  return (
    <div className={shopstyle.shop}>
     <Commonsectoion page="Shop"      home="Home"  img={""}/>
    <Filtershop/>
    <Products4/>
    <Commonparttwo/>


    </div>
  )
}

export default Shop4
