import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import Footer from './Home/Footer';
import Navbar from './Navbar';
import p1 from "../images/products/3.jpg"


function ProductFilter() {
    const {id , type} = useParams()
    const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/products").then((res) => {
      const data = res.data;
      setData(data);
    });
  }, []);

  const filter = data.filter(row=>{
    if(row.type === type){
        return  row ;
    }
  })
  return (
    <>
 <Navbar id={id}/>
    <div className="grid">
    {filter.map(row=>{
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
      </div>
     
    <Footer/>
    </>
  )
}

export default ProductFilter