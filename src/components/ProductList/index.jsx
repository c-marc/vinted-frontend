import { Link } from "react-router-dom";

import ProductCardSmall from "../ProductCardSmall";

import "./productList.css";

const ProductList = ({ data }) => {
  return (
    <div className="product-list-container">
      {data.map((item) => {
        return (
          <Link key={item._id} to={`/offer/${item._id}`}>
            <ProductCardSmall data={item} />
          </Link>
        );
      })}
    </div>
  );
};

export default ProductList;
