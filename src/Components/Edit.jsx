import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Home/Footer";
import Header from "./Home/Header";
import Navbar from "./Navbar";

function Edit() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [mail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [mno, setMno] = useState();

  useEffect(() => {
    axios.get(`http://localhost:4000/user/${id}`).then((res) => {
      const data = res.data[0];
      setAddress(data.address)
      setEmail(data.mail)
      setMno(data.mno)
      setPassword(data.password)
      setData(data);
    });
  }, []);
  const submitHandler=(e)=>{
    e.preventDefault();
    const obj= {
      mail,
      password,
      address,
      mno

    }
    axios.put(`http://localhost:4000/user/${id}`,obj)
    alert("Registered successfully")
  }
  console.log(data)
  return (
    <>
      <Navbar id={id}/>


<Header id={id}/>
      <div className="edit">
      <div className="text">Hello {id} <br /> Edit Your Information
      <p>👋</p>
      </div>
      <form onSubmit={submitHandler} className="form">
        Email: <input type="email" value={mail} onChange={(e) => setEmail(e.target.value)} />
        Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        Address : <input type="text"  value={address} onChange={(e) => setAddress(e.target.value)}/>
            Mobile No : <input type="number" value={mno} onChange={(e) => setMno(e.target.value)}/>
          <input type="submit"value="Update Info"/>
      </form>
       
    </div>
    <Footer />

    </>

  );
}

export default Edit;
