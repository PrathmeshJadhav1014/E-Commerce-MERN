import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../../images/logo/logo.png";

function ANavbar() {
  return (
    <>
     <>
      <div class="header-main">
        <div class="container">
          <NavLink to={`/admin`}>
          <a href="#" class="nav">
            <img src={logo} alt="Anon's logo"/>
          </a>
          </NavLink>
          <div class="header-user-actions">
          <NavLink to={`/admin`}>
            <button class="btn2">
              Home
            </button>
            </NavLink>
          <NavLink to={`/admin/order`}>
            <button class="btn2">
              Orders
            </button>
            </NavLink>
          <NavLink to={`/admin/users`}>
            <button class="btn2">
              Users
            </button>
            </NavLink>
            <NavLink to={`/admin/seller`}>
            <button class="btn2">
             Sellers
            </button>
            </NavLink>
          <NavLink to={`/admin/products`}>
            <button class="btn3">
             Products
            </button>
            </NavLink>
          <NavLink to={`/`}>

            <button class="action-btn">
              <span class="material-icons">logout</span>
            </button>
            </NavLink>

          </div>
        </div>
      </div>
    </></>
  )
}

export default ANavbar