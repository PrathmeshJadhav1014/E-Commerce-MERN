import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo/logo.png";

function Signin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [ex, setex] = useState(false);
  const [data, setData] = useState();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if(email && password)
      {
        if(email === "admin@gmail.com" && password === "admin123"){
        navigate(`/admin`)
        alert("Admin login successful")
      }
      }


   data.filter((data) => {
      if (data.mail === email && data.password === password) {
        if (data.type === "User") {
          navigate(`/home/${data.name}`);
          alert("login Successfully!");
        } else {
          console.log("Agent");
          alert("login Successfully As Agent!");
          navigate(`/seller/${data.name}`);
        }
      } else {
        setex(true);
        setEmail("");
        setPassword("");
      }
    });
  };
  const nav = () => {
    navigate("/signup");
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/user")
      .then(async (res) => {
        const data = await res.data;
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="flex">
        <div className="left">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <form onSubmit={submitHandler} className="form">
          {ex && <div className="red">Entered Invalid Data</div>}
          Email :{" "}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="m"
            required
          />
          Password :{" "}
          <input
            type="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="m"
            required
          />
          <div className="btn1">
            <input type="submit" value="SignIn" />
            <input type="button" value="Register" onClick={nav} />
          </div>
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

export default Signin;
