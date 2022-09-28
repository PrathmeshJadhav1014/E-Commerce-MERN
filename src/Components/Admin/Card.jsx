import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
function Card() {
    const [pdata, setPData] = useState([]);
    const [udata, setUData] = useState([]);
    const [odata, setOData] = useState([]);
    const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);

    useEffect(() => {
      axios.get("http://localhost:4000/products").then((res) => {
        const data = res.data;
        setPData(data);
      });
      axios.get("http://localhost:4000/user").then((res) => {
        const data = res.data;
        setUData(data);
      });
      axios.get("http://localhost:4000/order").then((res) => {
        const data = res.data;
        setOData(data);
      });
      forceUpdate();

    }, [reducerValue]);

    const filter = udata.filter(data=>{
        if(data.type === "User"){
            return(data);
        }
    })
    const filter2 = udata.filter(data=>{
        if(data.type === "Seller"){
            return(data);
        }
    })
    const filter3 = odata.map(data=>{
        return data.price
    })
    function sumArray(array) {
        let sum = 0;
      
        for (let i = 0; i < array.length; i += 1) {
          sum += array[i];
        }
        
        return sum;
      }
  return (
    <>
<div class="Card-grid">
        <div class="card">
          <h3 class="card__title ">
          Total Earning RS-<span className='Red'>{sumArray(filter3)}</span>
          </h3>
        </div>
        <div class="card">
          <h3 class="card__title">
          Total Products <span>{pdata.length}</span>
          </h3>
          <p class="card__apply">
            <NavLink to = "/admin/products">See All </NavLink> <i class="fas fa-arrow-right"></i>
          </p>
        </div>
        <div class="card ">
          <h3 class="card__title">Total No of Orders  <span>{odata.length}</span></h3>
          <p class="card__apply">
            <NavLink to="/admin/order">
            See All  <i class="fas fa-arrow-right"></i>
            </NavLink>
          </p>
        </div>
      </div>
      <div className="Card-grid2">

        <div class="card ">
          <h3 class="card__title">
          Total No of Sellers  <span>{filter2.length} </span>
          </h3>
          <p class="card__apply">
            <NavLink to = "/admin/seller">See All </NavLink><i class="fas fa-arrow-right"></i>
          </p>
        </div>
        <div class="card">
          <h3 class="card__title">
          Total No of Users  <span>{filter.length}  </span>
          </h3>
          <p class="card__apply">
            <NavLink to = "/admin/users">See All </NavLink><i class="fas fa-arrow-right"></i>
          </p>
        </div>
        </div>
    </>
  )
}

export default Card