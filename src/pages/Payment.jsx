import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";

const STRIPE_PK =
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP";

const Payment = ({ token }) => {
  const location = useLocation();
  const { title, price } = location.state;

  const stripePromise = loadStripe(STRIPE_PK);
  console.log("Payment route ok ?");

  return (
    <div className="payment-container">
      {!token ? (
        <Navigate to="/login" state={{ ...location.state, from: "/payment" }} />
      ) : (
        <Elements stripe={stripePromise}>
          <CheckoutForm
            token={token} // need to rewrite so that we can use user id instead
            title={title}
            price={price}
          />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
