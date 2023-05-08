import User from "../User";

import "./productCardBig.css";

const ProductCardBig = ({ data }) => {
  const price = data.product_price;

  let details = data.product_details.map((detail) => {
    // beware of empty objects sent by mischievous people
    if (Object.keys(detail).length !== 1) {
      return { key: null, value: null };
    }
    const [key, value] = Object.entries(detail)[0];
    return { key, value };
  });
  details = details
    .filter((d) => d.key)
    .filter((d) => !/paiement/i.test(d.key));

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

      <button className="btn btn-primary">Acheter</button>
    </div>
  );
};

export default ProductCardBig;
