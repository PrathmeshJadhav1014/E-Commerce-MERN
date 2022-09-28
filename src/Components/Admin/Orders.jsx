import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import Footer from "../Home/Footer";
import ANavbar from "./ANavbar";

function Orders() {
  const [odata, setOData] = useState([]);
  const [display, setDisplay] = useState(false);
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);
  const [pId, setPId] = useState();
  const [type, setType] = useState("Incomplete");

  let i = 1;

  useEffect(() => {
    axios.get("http://localhost:4000/order").then((res) => {
      const data = res.data;
      setOData(data);
    });
  }, [reducerValue]);
  const updateO = (id, e) => {
    e.preventDefault();
    setDisplay(!display);
    const obj = {
      status: type,
    };
    axios
      .put(`http://localhost:4000/order/${id}`, obj)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    forceUpdate();
  };
  const filter = odata.map((data) => {
    return data.price;
  });
  function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i += 1) {
      sum += array[i];
    }
    return sum;
  }
  useEffect(() => {
    axios.delete(`http://localhost:4000/order/${pId}`);
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
      <ANavbar />
      <div className="body">
        <div className="Card-grid3">
          <div class="card ">
            <h3 class="card__title">
            Total No Of orders <span>{odata.length} </span>
            </h3>
          </div>
          <div class="card">
            <h3 class="card__title">
            Total Earning RS- <span className="Red">{sumArray(filter)} </span>
            </h3>
          </div>
        </div>
        <div className="container mh  mb-3 mt-5">
          <table className="table table-striped mt-5">
            <thead>
              <tr>
                <th scope="col">Sr No.</th>
                <th scope="col">Name</th>
                <th scope="col">Product </th>
                <th scope="col">Price</th>
                <th scope="col">Type</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
                <th scope="col">Update</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {odata.map((row) => {
                return (
                  <tr>
                    <th scope="row">{i++}</th>
                    <td>{row.uid}</td>
                    <td>{row.pname}</td>
                    <td><div className="Red">{row.price}</div></td>
                    <td>{row.type}</td>
                    <td>{row.date}</td>
                    {/* <td><select name="status" className='select' onChange={e=>setstatus(e.target.value)}>
                    <option value={row.status}>Incomplete</option>
                    <option value="Delivered">delivered</option>
                    </select></td> */}
                    {display && (
                      <>
                        {" "}
                        <td>
                          <select
                            name="type"
                            className="select"
                            id=""
                            onChange={(e) => setType(e.target.value)}
                          >
                            <option value="Incomplete">Incomlete</option>
                            <option value="Delivered">Delivered</option>
                          </select>
                        </td>
                      </>
                    )}
                    {display == false && <td>{row.status}</td>}
                    <td>
                      <button
                        type="button"
                        class="btn btn-success btn-sm"
                        onClick={(e) => updateO(row._id, e)}
                      >
                        Update
                      </button>
                    </td>
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
      <Footer />
    </>
  );
}

export default Orders;
