import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate} from "react-router-dom"
import logo from "../images/logo/logo.png";


function Signup() {
  const navigate = useNavigate();
  const [type, setType] = useState("User");
  const [name, setName] = useState("");
  const [mail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [mno, setMno] = useState();
  const [SName, setSname] = useState("");

  const submitHandler = (e)=>{
    e.preventDefault();
    const obj= {
      name,
      mail,
      password,
      type,
      SName,
      address,
      mno

    }
    // console.log(obj)
    axios.post("http://localhost:4000/user",obj)
    alert("Registered successfully")
    setAddress("")
    setEmail("")
    setMno()
    setName("")
    setPassword("")
    setSname("")
    setType("User")
    navigate(`/`)
  }
  return (
    <>
     <div className="flex">
     <div className="left">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        
      <form onSubmit={submitHandler} className="form">
       
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"/>
        <input type="email" value={mail} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Password"/>
        {type === "Seller" && (
          <>
            <input type="text" value={SName} onChange={(e) => setSname(e.target.value)}  placeholder="Shop Name"/>
            
          </>
        )}
            <input type="text"  value={address} onChange={(e) => setAddress(e.target.value)}  placeholder="Address"/>
            <input type="number" value={mno} onChange={(e) => setMno(e.target.value)}  placeholder="Mobile No"/>
            <div className="btn1">
            <select name="type" className="select" id="" onChange={(e) => setType(e.target.value)}>
          <option value="User">User</option>
          <option value="Seller">Seller</option>
        </select>
          <input type="submit" value="Register"/>
          </div>

        {/* <NavLink to={`/`}>
          <button type="submit">SignIn</button>
        </NavLink> */}
      </form>
      

      </div>
      <footer>
      <div class="footer-bottom">
        <div class="container">
          <p class="copyright">
            Copyright &copy; Fabric all rights reserved. Developed By Prathmesh Jadhav.
          </p>
        </div>
      </div>
      </footer>
      

    </>
  );
}

export default Signup;
