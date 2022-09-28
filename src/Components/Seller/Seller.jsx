import React, { useEffect,useState } from "react";
import Footer from "../Home/Footer";
import img from "../../images/img.jpg";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import p1 from "../../images/products/3.jpg"
import SNavbar from "./SNavbar";


function Seller() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [shop,setShop] = useState();
  const[odata,setOData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/products").then(async(res) => {
      const data =await res.data;
      setData(data);
    });
    axios.get(`http://localhost:4000/user/${id}`).then(async(res) => {
      const data =await res.data[0];
      setShop(data.SName);
    });
    axios.get("http://localhost:4000/order").then(async(res) => {
      const data =await res.data;
      setOData(data);
    });
  }, [id]);
  const filter =odata.filter(data=>{
    if(data.shop === shop){
      return data ;
    }
  })
  const filter2 = data.filter(row=>{
    if(row.sname === id){
      return row
    }
  })
  const map =filter.map(data=>{
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
      <SNavbar id={id}/>
      <div class="slider-item">
        <img src={img} alt="women's latest fashion sale" class="banner-img" />

        <div class="banner-content">
          <h2 class="banner-title">Hello {id}</h2>
          <h3><div className="red">Total Shop Earning RS-{sumArray(map)}</div></h3>
          <h4>Your Total No of Orders {filter.length}</h4>
          <h4>Your Total No of products {filter2.length}</h4>


          <NavLink to={`/add/${id}`}>
              Add Products
          </NavLink>
        </div>
      </div>
      <div className="ProductGrid">
      {filter2.map(row=>{
        return(
          <NavLink to ={`/detailseller/${id}/${row._id}`}>
          <div className="card">
      <img src={p1} alt=""  width="200" height="250"/>
      <ul>
        <li>Name: {row.pname}</li>
        <li>Type: {row.type}</li>
        <li>Price: {row.price}</li>
      </ul>
      </div> 
      </NavLink>
        )
      })}
      </div>
      <Footer />
    </>
  );
}

export default Seller;
