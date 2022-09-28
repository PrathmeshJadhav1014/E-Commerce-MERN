import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar'
import Carousel from './Carousel'
import Footer from './Footer'
import Header from './Header'
import ProductGrid from './ProductGrid'


function Home() {
  const{id}= useParams();
  

  return (
    <div>
        <Navbar id={id}/>


   <Header id={id}/>
<Carousel/>
<ProductGrid id={id}/>
<Footer id={id}/>

    </div>
  )
}

export default Home
