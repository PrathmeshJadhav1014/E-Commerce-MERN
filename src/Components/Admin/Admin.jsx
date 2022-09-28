import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Footer from '../Home/Footer'
import ANavbar from './ANavbar'
import img from "../../images/img.jpg";
import Card from './Card';

function Admin() {
   
  return (
    <>
    <ANavbar/>
    <div class="slider-item">
        <img src={img} alt="women's latest fashion sale" class="banner-img" />

        <div class="banner-content">
          <h2 class="banner-title">Hello Admin</h2>
        </div>
      </div>
      <Card/>
      <Footer/>
    </>
  )
}

export default Admin