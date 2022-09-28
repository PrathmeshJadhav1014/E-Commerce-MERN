import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react'
import Footer from '../Home/Footer'
import ANavbar from './ANavbar'

function Sellers() {
    const [udata, setUData] = useState([]);
    const [userId, setUserId] = useState("");
    const [data, setData] = useState([]);
    const[odata,setOData] = useState([]);
    const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);
  const [shop,setShop] = useState();

    let i =1;
    useEffect(() => {
        axios.get("http://localhost:4000/user").then((res) => {
          const data = res.data;
          setUData(data);
        });
      }, [reducerValue]);
      const filter = udata.filter(data=>{
        if(data.type === "Seller"){
            return(data);
        }
    })

  useEffect(() => {
    axios.delete(`http://localhost:4000/user/${userId}`);
    forceUpdate();
  }, [userId]);
    const deleteUser = (id, e) => {
        // console.log(id)
        e.preventDefault();
        setUserId(id);
        forceUpdate();
      };
  return (
    <>
      <ANavbar/>
    <div className='body'>
    <h3 class="card__title">
            Total No Of Seller's <span>{filter.length} </span>
            </h3>
    <div className="container mh  mb-3 mt-5">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Sr No.</th>
              <th scope="col">Name</th>
              <th scope="col">Gmail </th>
              <th scope="col">Shop</th>
              <th scope="col">Address</th>
              <th scope="col">Mobile No</th>
              <th scope="col">Delete User</th>
            </tr>
          </thead>
          <tbody>
            {filter.map((row) => {
              return (
                <tr>
                  <th scope="row">{i++}</th>
                  <td>{row.name}</td>
                  <td>{row.mail}</td>
                  <td>{row.SName}</td>
                  <td>{row.address}</td>
                  <td>{row.mno}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-danger btn-sm"
                      onClick={(e) => deleteUser(row._id, e)}
                    >
                      Delete User
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

export default Sellers