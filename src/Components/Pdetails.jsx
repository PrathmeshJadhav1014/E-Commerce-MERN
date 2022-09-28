import React, { useEffect, useReducer, useState } from "react";
import p1 from "../images/products/3.jpg";
import { NavLink, useParams } from "react-router-dom";
import "./Pdetails.css";
import Navbar from "./Navbar";
import Footer from "./Home/Footer";
import axios from "axios";

function Pdetails() {
  const { id, pid } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:4000/products/${pid}`).then((res) => {
      const data = res.data;
      setData(data);
    });
  }, []);
  const addtocart = (e) => {
    e.preventDefault();

    const obj = {
      uid: id,
      pname: data[0].pname,
      price: data[0].price,
      type: data[0].type,
      shop: data[0].shop
    };

    axios.post('http://localhost:4000/cart',obj)
  };
  return (
    <>
      <Navbar id={id}/>
      <div className="details">
        <img src={p1} alt="" width="500px" height="550px" />
        {data.map((row) => {
          return (
            <>
              <div className="info">
                <ul>
                  <li>{row.type}</li>
                  <li>{row.pname}</li>
                  <li>{row.price}</li>
                  <li>
                      <button onClick={addtocart}>Add To Cart</button>
                  </li>
                  <li>
                  <NavLink to={`/cart/${id}`}>
                      <button >go To Cart</button>
                    </NavLink>
                  </li>
                  <li>{row.shop}</li>
                  <li>{row.pdetails}</li>
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

export default Pdetails;
