import shopstyle from  "./Shop.module.css"
import Commonsectoion from "../Commonsection/Commensection"
import Filtershop from '../Filtershop/Filtershop'
import Products2 from '../Products/Products2'
import Commonparttwo from '../Commnparttwo/Commonparttwo'

function Shop2() {
  return (
    <div className={shopstyle.shop}>
     <Commonsectoion page="Shop"      home="Home"  img={""}/>
    <Filtershop/>
    <Products2/>
    <Commonparttwo/>

    </div>
  )
}

export default Shop2
