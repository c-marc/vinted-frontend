import User from "../User";

import "./productCardSmall.css";

const ProductCardSmall = ({ data }) => {
  let marque = null;
  let taille = null;
  data.product_details.forEach((el) => {
    if (el.MARQUE) marque = el.MARQUE;
    if (el.TAILLE) taille = el.TAILLE;
  });

  return (
    <article className="product-card-small-container">
      <div className="product-header">
        <User user={data.owner} />
      </div>
      <img
        className="product-img"
        src={data.product_image.secure_url}
        alt="TODO alt_product"
      />
      <div className="product-footer">
        <p className="price">{data.product_price} €</p>
        {taille && <p>{taille}</p>}
        {marque && <p>{marque}</p>}
      </div>
    </article>
  );
};

export default ProductCardSmall;
