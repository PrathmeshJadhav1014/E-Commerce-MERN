import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import p1 from "../images/products/3.jpg";
import "./CheckOut.css";
import Footer from "./Home/Footer";
import Navbar from "./Navbar";
function CheckOut() {
  const { id, pid } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:4000/cart/${id}`).then((res) => {
      const data = res.data;
      setData(data);
    });
 
  }, []);
  
  const filter = data.filter((row) => {
    if (row._id == pid) {
      return row;
    }
  });
  console.log(filter)


  const order = () => {
    const obj = {
      uid: id,
      pname: filter[0].pname,
      price: filter[0].price,
      type: filter[0].type,
      date: new Date (),
      status: "Incomplete",
      shop:filter[0].shop,
    };
    axios.post('http://localhost:4000/order',obj).then(res=>{console.log(res)}).catch(err=>console.log(err))
    axios.delete(`http://localhost:4000/cart/${pid}`)
    alert("Order Placed successfully")


  };
  return (
    <>
      <Navbar id={id}/>
      <div className="checkout">
        <img src={p1} alt="" width="400px" height="450px" />
        {filter.map((data) => {
          return (
            <>
            <NavLink to={`/cart/${id}`}>
                <button className="CloseBtn"><h5>X</h5></button>
                </NavLink>
              <div className="info">
                
                <ul>
                  <li>{data.type}</li>
                  <li>{data.pname}</li>
                  <li>{data.price}</li>
                  <li>
                    Address: Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Architecto, cumque.
                    <NavLink to={`/edit/${id}`}>
                    <button>Edit Address</button>
                    </NavLink>
                  </li>
                  <li>COD Only</li>
                  <li>Expected Delivery time 6 Day's after Buying</li>
                  <li>
                    {/* <button onClick={order}>{"Check Out >"}</button> */}
                    <NavLink to={`/cart/${id}`}>
                      <button onClick={order}>{"Check Out >"}</button>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </>
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default CheckOut;
