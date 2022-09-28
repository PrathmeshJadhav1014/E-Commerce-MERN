import React, { useEffect, useReducer, useState } from "react";
import p1 from "../images/products/3.jpg";
import "./Cart.css"
import {NavLink, useParams} from "react-router-dom"
import Footer from "./Home/Footer";
import Navbar from "./Navbar";
import axios from "axios";


function Cart() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [cartId,setCartId] = useState("");
  const [reducerValue , forceUpdate] = useReducer(x=> x + 1,0)

  useEffect(() => {
    axios.get(`http://localhost:4000/cart/${id}`).then((res) => {
      const data = res.data;
      setData(data);
    });
  }, [reducerValue]);
  useEffect(()=>{
    axios.delete(`http://localhost:4000/cart/${cartId}`)
    forceUpdate();
    
  },[cartId])

  const deleteCart = (e,id)=>{
    e.preventDefault();
    // console.log("deleteCart" ,id);
    setCartId(id)
    forceUpdate();

  }

  return (
    <>
    <div className="Cart">
        <Navbar id={id}/>
      {data.map((data) => {
        return (
          <>
          <form onSubmit={e=>deleteCart(e,data._id)}>
            <div className="cart">
              <ul>
                <li>
                  <img src={p1} alt="" />
                </li>
                <li>{data.pname}</li>
                <li>{data.price}</li>
                <li><NavLink to={`/checkout/${id}/${data._id}`}><button>{"Buy Now >"}</button></NavLink></li>
                <li><button type="submit">X</button></li>
              </ul>
            </div>
            </form>
          </>
        );
      })}

      </div>
      <Footer/>

    </>
  );
}

export default Cart;
