import { useParams } from "react-router-dom";
import ProductCardBig from "../components/ProductCardBig";

const Offer = ({ offers }) => {
  const params = useParams();
  console.log(params);

  const offer = offers.find((offer) => offer._id === params.id);

  return (
    <div className="offer">
      <img src={offer.product_image.secure_url} alt="TODO"></img>
      <ProductCardBig offer={offer} />
    </div>
  );
};

export default Offer;
