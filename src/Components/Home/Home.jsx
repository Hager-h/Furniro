import React from 'react'
import Landing from '../Landing/Landing.jsx'
import style from"./Home.module.css"
import Browse from '../Browse/Browse.jsx'
import Featuredproducts from '../FeaturedProducts/Featuredproducts.jsx'
import Rooms from '../Rooms/Rooms.jsx'
import Beforefooter from '../Beforefooter/Beforefooter.jsx'
function Home() {
  return (
    <div className={style.home}>
      <Landing />
      <Browse/>
      <Featuredproducts/>
      <Rooms/>
      <Beforefooter/>
    </div>
  )
}

export default Home
