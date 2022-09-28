import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/products").then((res) => {
      const data = res.data;
      setData(data);
    });
  }, []);
  const filter = data.map(row=>{
        return  row.type
  })

  console.log(filter)
  return (
    <>
      <header>
        <nav class="desktop-navigation-menu">
          <div class="container">
            <ul class="desktop-menu-category-list">
              <li class="menu-category">
                <a href="#" class="menu-title">
                  Home
                </a>
              </li>

              <li class="menu-category">
                <a href="#" class="menu-title">
                  Categories
                </a>

                <div class="dropdown-panel">
                  <ul class="dropdown-panel-list">
                  
                    {filter.slice(6,9).map(row=>{
                      return(
                        <NavLink to={``}>
                        <li class="panel-list-item">
                      <a href="#">{row}</a>
                    </li>
                    </NavLink>
                      );
                    })}
                    

                    
                  </ul>
                  <ul class="dropdown-panel-list">
                  <li class="menu-title">
                      <a href="#">Catagories</a>
                    </li>
                    {filter.slice(0,3).map(row=>{
                      return(
                        <NavLink to={`/pfilter/${props.id}/${row}`}>
                        <li class="panel-list-item">
                      <a href="#">{row}</a>
                    </li>
                    </NavLink>
                      );
                    })}
                    

                    
                  </ul>
                  <ul class="dropdown-panel-list">
                  <li class="menu-title">
                  <a href="#">Catagories</a>

                    </li>
                    {filter.slice(3,6).map(row=>{
                      return(
                        <NavLink to={``}>
                        <li class="panel-list-item">
                      <a href="#">{row}</a>
                    </li>
                    </NavLink>
                      );
                    })}
                    

                    
                  </ul>
                  <ul class="dropdown-panel-list">
                  
                    {filter.slice(9,12).map(row=>{
                      return(
                        <NavLink to={``}>
                        <li class="panel-list-item">
                      <a href="#">{row}</a>
                    </li>
                    </NavLink>
                      );
                    })}
                    

                    
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </nav>
       
      </header>
    </>
  );
}

export default Header;
