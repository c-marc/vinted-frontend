import { Link } from "react-router-dom";

const Product = ({ offer }) => {
  let marque = "";
  let taille = "";
  offer.product_details.forEach((el) => {
    if (el.MARQUE) marque = el.MARQUE;
    if (el.TAILLE) taille = el.TAILLE;
  });

  return (
    <article className="product">
      <Link to={`/offer/${offer._id}`}>
        <div className="product-header">
          <img
            src={offer.owner?.account?.avatar?.secure_url}
            alt="TODO alt_avatar"
          />
          <p>{offer.owner.account.username}</p>
        </div>
        <img
          className="product-img"
          src={offer.product_image.secure_url}
          alt="TODO alt_product"
        />
        <div className="product-footer">
          <p className="price">{offer.product_price} €</p>
          <p>{taille}</p>
          <p>{marque}</p>
        </div>
      </Link>
    </article>
  );
};

export default Product;
