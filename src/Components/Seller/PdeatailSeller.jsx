import React, { useEffect, useState } from "react";
import p1 from "../../images/products/3.jpg";
import { useParams } from "react-router-dom";
import Footer from "../Home/Footer";
import axios from "axios";
import SNavbar from './SNavbar';

function PdeatailSeller() {
    const { id, pid } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
      axios.get(`http://localhost:4000/products/${pid}`).then((res) => {
        const data = res.data;
        setData(data);
      });
    }, [pid]);
  return (
    <>
     <SNavbar id={id}/>
      <div className="details">
        <img src={p1} alt="" width="500px" height="550px" />
        {data.map((row) => {
          return (
            <>
              <div className="info">
                <ul>
                  <li>Type: {row.type}</li>
                  <li>Name: {row.pname}</li>
                  <li>Price: {row.price}</li>
                  <li>Shop Name: {row.shop}</li>
                  <li>Details: {row.pdetails}</li>
                </ul>
              </div>
            </>
          );
        })}
      </div>
      <Footer />
      </>
  )
}

export default PdeatailSeller