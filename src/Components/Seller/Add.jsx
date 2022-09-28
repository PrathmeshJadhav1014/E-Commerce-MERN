import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Home/Footer";
import axios from "axios";
import SNavbar from "./SNavbar";

function Add() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [pname, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("Men");
  const [pdetails, setDetails] = useState("");
  const navigate = useNavigate();

  const submiHandler = (e) => {
    e.preventDefault();
    const obj = {
      pname,
      price,
      type,
      shop: data,
      pdetails,
      sname: id
    };

    console.log(obj);
    axios.post("http://localhost:4000/products", obj);
    alert("Product added successfully")
    navigate(`/seller/${id}`)
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/user/${id}`)
      .then((res) => {
        const data = res.data[0].SName;
        setData(data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  console.log(data);
  return (
    <>
      <SNavbar id={id}/>
      <div className="edit">
      <div className="text">Hello {id} <br /> Add New Product
      <p>{">"}</p>
      </div>
      <form onSubmit={submiHandler} className="form">
        Name :
        <input
          type="text"
          value={pname}
          onChange={(e) => setName(e.target.value)}
          required
        />
        Price :
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        Type : <br />
        <select name="type" className="select" id=""
          onChange={(e) => setType(e.target.value)} >
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
          <option value="LifeStyle">LifeStyle</option>
        </select><br />
        Details :
        <input
          type="text"
          value={pdetails}
          onChange={(e) => setDetails(e.target.value)}
          required
        />
     
        <input type="submit" value="Add Product"/>
      </form>
      </div>
      <Footer />
    </>
  );
}

export default Add;
