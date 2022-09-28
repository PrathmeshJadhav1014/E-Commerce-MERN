import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import logo from "../../images/logo/logo.png";

function SNavbar({id}) {
    const navigate = useNavigate();
    const nav=()=>{
        navigate(`/seller/${id}`)
    }
  return (
    <>
        <div class="nav">
            
            <img src={logo} onClick={nav} />
        </div>
      </>
  )
}

export default SNavbar