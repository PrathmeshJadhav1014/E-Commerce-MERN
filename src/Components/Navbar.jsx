import React, { useEffect, useReducer } from "react";
import logo from "../images/logo/logo.png";
import {NavLink} from "react-router-dom"
import { useState } from "react";
import axios from "axios";


function Navbar({id}) {
  const[name,setname] = useState("");
  const [data, setData] = useState([]);
  const [reducerValue , forceUpdate] = useReducer(x=> x + 1,0)

  useEffect(() => {
    axios.get(`http://localhost:4000/cart/${id}`).then((res) => {
      const data = res.data;
      setData(data);
      forceUpdate()
    });
  }, [reducerValue,id]);
  return (
    <>
      <div class="header-main">
        <div class="container">
          <NavLink to={`/home/${id}`}>
          <a href="#" class="nav">
            <img src={logo} alt="Logo"  />
          </a>
          </NavLink>

          <div class="header-search-container">
            <input
              type="search"
              name="search"
              class="search-field"
              placeholder="Enter your product name..."
              onChange={e=>setname(e.target.value)}
            />
          <NavLink to={`/seeall/${id}/${name}`}>

            <button class="search-btn">
              <span class="material-icons">search</span>
            </button>
            </NavLink>

          </div>
          <div class="header-user-actions">
          <NavLink to={`/edit/${id}`}>

            <button class="action-btn">
              <span class="material-icons">manage_accounts</span>
            </button>
            </NavLink>
          <NavLink to={`/cart/${id}`}>
            <button class="action-btn">
              <span class="material-icons">shopping_cart</span>

              <span class="count">{data.length}</span>
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
    </>
  );
}

export default Navbar;
