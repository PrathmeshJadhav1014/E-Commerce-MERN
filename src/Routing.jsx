import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "./Components/Admin/Admin";
import Orders from "./Components/Admin/Orders";
import Products from "./Components/Admin/Products";
import Sellers from "./Components/Admin/Sellers";
import Users from "./Components/Admin/Users";
import Cart from "./Components/Cart";
import CheckOut from "./Components/CheckOut";
import Edit from "./Components/Edit";
import Home from "./Components/Home/Home";
import SeAllF from "./Components/Home/SeAllF";
import SeeAll from "./Components/Home/SeeAll";
import Pdetails from "./Components/Pdetails";
import ProductFilter from "./Components/ProductFilter";
import Add from "./Components/Seller/Add";
import PdeatailSeller from "./Components/Seller/PdeatailSeller";
import Seller from "./Components/Seller/Seller";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";

function Routing() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/home/:id" element={<Home />} />
        <Route exact path="/details/:id/:pid" element={<Pdetails />} />
        <Route exact path="/detailseller/:id/:pid" element={<PdeatailSeller />} />
        <Route exact path="/cart/:id" element={<Cart />} />
        <Route exact path="/checkout/:id/:pid" element={<CheckOut />} />
        <Route exact path="/edit/:id" element={<Edit />} />
        <Route exact path="/seller/:id" element={<Seller />} />
        <Route exact path="/add/:id" element={<Add />} />
        <Route exact path="/seeall/:id" element={<SeeAll />}  />
        <Route exact path="/seeall/:id/:name" element={<SeAllF />}  />
        <Route exact path="/pfilter/:id/:type" element={<ProductFilter />}  />
        <Route exact path="/admin/seller" element={<Sellers />}  />
        <Route exact path="/admin/users" element={<Users />}  />
        <Route exact path="/admin/order" element={<Orders />}  />
        <Route exact path="/admin/products" element={<Products />}  />

        

      </Routes>
    </div>
  );
}

export default Routing;
