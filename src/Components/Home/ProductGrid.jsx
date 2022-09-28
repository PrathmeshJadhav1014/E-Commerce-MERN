import React from "react";
import { NavLink } from "react-router-dom";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";

function ProductGrid(props) {

  const id= props.id;
  return (
    <>
      <div className="seeAll">
        <NavLink to={`/seeall/${id}`}>
          <button>See All Products</button>
        </NavLink>
      </div>
      <div className="ProductGrid">
        <ProductCard id={id} />
      </div>
    </>
  );
}

export default ProductGrid;
