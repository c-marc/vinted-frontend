import Product from "./Product";

const Products = ({ offers }) => {
  return (
    <div className="products container">
      {offers.map((offer) => {
        return <Product key={offer._id} offer={offer} />;
      })}
    </div>
  );
};

export default Products;
