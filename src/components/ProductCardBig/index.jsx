import User from "../User";
import { useNavigate } from "react-router-dom";

import "./productCardBig.css";

const ProductCardBig = ({ data }) => {
  const navigate = useNavigate();

  const price = data.product_price;

  // Cast details in a more comfortable data structure
  // new structure is {key: "MARQUE", value: "X"}
  let details = data.product_details.map((detail) => {
    // Beware of empty objects sent by mischievous people
    if (Object.keys(detail).length !== 1) {
      return { key: null, value: null };
    }
    const [key, value] = Object.entries(detail)[0];
    return { key, value };
  });

  // Get rid of null entries (corrupted data)
  // "paiement" is not shown here
  details = details
    .filter((d) => d.key)
    .filter((d) => !/paiement/i.test(d.key));

  // Just for readability of jsx
  const name = data.product_name;
  const description = data.product_description;

  return (
    <div className="product-card-big-container">
      <section className="content-top">
        <p className="price">{price} €</p>

        <ul>
          {details.map((detail) => {
            return (
              <li key={detail.key}>
                <span>{detail.key}</span>
                <span>{detail.value}</span>
              </li>
            );
          })}
        </ul>
      </section>

      <hr />

      <section className="content-bottom">
        <p className="name">{name}</p>
        <p className="description">{description}</p>
        <User user={data.owner} />
      </section>

      <button
        className="btn btn-primary"
        onClick={() =>
          navigate("/payment", { state: { title: name, price: price } })
        }
      >
        Acheter
      </button>
    </div>
  );
};

export default ProductCardBig;
