import React from 'react'
import b1 from "../../images/b1.jpg"
import b2 from "../../images/b2.jpg"
import b3 from "../../images/b3.jpg"

function Carousel() {
  return (
    <>
      
<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div class="slider-item">

<img src={b1} alt="women's latest fashion sale" class="banner-img"/>

<div class="banner-content">

  <p class="banner-subtitle">Trending item</p>

  <h2 class="banner-title">Women's latest fashion sale</h2>

  <p class="banner-text">
    starting at RS <b>200</b>
  </p>


</div>

</div>
    </div>
    <div class="carousel-item">
    <div class="slider-item">

<img src={b2} alt="women's latest fashion sale" class="banner-img"/>

<div class="banner-content">

  <p class="banner-subtitle">Trending item</p>

  <h2 class="banner-title"> latest fashion sale</h2>

  <p class="banner-text">
    starting at Rs <b>500</b>.00
  </p>


</div>

</div>
    </div>
    <div class="carousel-item">
    <div class="slider-item">

<img src={b3} alt="women's latest fashion sale" class="banner-img"/>

<div class="banner-content">

  <p class="banner-subtitle">Trending item</p>

  <h2 class="banner-title">Mens latest fashion sale</h2>

  <p class="banner-text">
    starting at Rs <b>300</b>.00
  </p>


</div>

</div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Carousel
