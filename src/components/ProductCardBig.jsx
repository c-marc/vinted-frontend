import User from "./User";

const ProductCardBig = ({ offer }) => {
  const price = offer.product_price;
  let details = offer.product_details.map((detail) => {
    const [key, value] = Object.entries(detail)[0];
    return { key, value };
  });
  details = details.filter((d) => !/paiement/i.test(d.key));

  const name = offer.product_name;
  const description = offer.product_description;

  return (
    <div className="product-card-big">
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
        <User user={offer.owner} />
      </section>

      <button className="btn-fill">Acheter</button>
    </div>
  );
};

export default ProductCardBig;
