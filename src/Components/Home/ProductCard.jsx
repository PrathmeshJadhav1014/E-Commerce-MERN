import React, { useEffect, useState } from 'react'
import p1 from "../../images/products/3.jpg"
import {NavLink} from "react-router-dom"
import axios from 'axios';


function ProductCard(props) {
  const id= props.id;
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/products").then((res) => {
      const data = res.data;
      setData(data);
    });
  }, []);
  return (
    <>
      {data.slice(0,4).map(row=>{
        return(
          <NavLink to ={`/details/${id}/${row._id}`}>
          <div className="card">
      <img src={p1} alt=""  width="200" height="250"/>
      <ul>
      <li>{row.pname}</li>
        <li>{row.type}</li>
        <li>{row.price}</li>
      </ul>
      </div> 
      </NavLink>
        )
      })}
     
    </>
  )
}

export default ProductCard
