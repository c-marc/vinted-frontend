import Product from "./Product";

const Products = ({ offersData }) => {
  return (
    <div className="products container">
      {offersData.map((offerData) => {
        return <Product key={offerData._id} offerData={offerData} />;
      })}
    </div>
  );
};

export default Products;
