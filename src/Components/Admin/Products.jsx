import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react'
import Footer from '../Home/Footer'
import ANavbar from './ANavbar'

function Products() {
    const [pdata,setPdata] = useState([]);
    const[pId,setPId]=useState();
    const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);
    let i =1;
    useEffect(() => {
        axios.get("http://localhost:4000/products").then((res) => {
          const data = res.data;
          setPdata(data);
        });
      }, [reducerValue]);
      useEffect(() => {
        axios.delete(`http://localhost:4000/products/${pId}`);
        forceUpdate();
      }, [pId]);
        const deleteP = (id, e) => {
            // console.log(id)
            e.preventDefault();
            setPId(id);
            forceUpdate();
          };
  return (
    <>
    <ANavbar/>
    <div className="body">
    <h3 class="card__title">
            Total No Of Products <span>{pdata.length} </span>
            </h3>
    <div className="container mh  mb-3 mt-5">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Sr No.</th>
              <th scope="col">Name</th>
              <th scope="col">Type </th>
              <th scope="col">Price</th>
              <th scope="col">Shop</th>
              <th scope="col">Seller Name</th>
              <th scope="col">Delete </th>
            </tr>
          </thead>
          <tbody>
            {pdata.map((row) => {
              return (
                <tr>
                  <th scope="row">{i++}</th>
                  <td>{row.pname}</td>
                  <td>{row.type}</td>
                  <td>{row.price}</td>
                  <td>{row.shop}</td>
                  <td>{row.sname}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-danger btn-sm"
                      onClick={(e) => deleteP(row._id, e)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      </div>
    <Footer/>
    </>
  )
}

export default Products