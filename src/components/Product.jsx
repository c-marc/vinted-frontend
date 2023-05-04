import { Link } from "react-router-dom";
import User from "./User";

const Product = ({ offerData }) => {
  let marque = null;
  let taille = null;
  offerData.product_details.forEach((el) => {
    if (el.MARQUE) marque = el.MARQUE;
    if (el.TAILLE) taille = el.TAILLE;
  });

  return (
    <article className="product">
      <Link to={`/offer/${offerData._id}`}>
        <div className="product-header">
          <User user={offerData.owner} />
        </div>
        <img
          className="product-img"
          src={offerData.product_image.secure_url}
          alt="TODO alt_product"
        />
        <div className="product-footer">
          <p className="price">{offerData.product_price} €</p>
          {taille && <p>{taille}</p>}
          {marque && <p>{marque}</p>}
        </div>
      </Link>
    </article>
  );
};

export default Product;
