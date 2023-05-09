import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { useLocation, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

// Public key
const STRIPE_PK =
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP";

const Payment = ({ token }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, price } = location.state;

  // Experimenting another pattern for redirection
  // - more JS and there is actually more to check than the token
  // - cleaner JSX
  // (need to double check before clearing JSX redundancy)
  useEffect(() => {
    if (!token) {
      console.log("Intercepted before rendering !");
      navigate("/login", { state: { ...location.state, from: "/payment" } });
    }

    // If someone is trying to access the route directly
    if (!title || !price) {
      navigate("/");
    }
  }, []);

  const stripePromise = loadStripe(STRIPE_PK);

  return (
    <div className="payment-container">
      {!token ? (
        <Navigate to="/login" state={{ ...location.state, from: "/payment" }} />
      ) : (
        <Elements stripe={stripePromise}>
          <CheckoutForm
            token={token} // need to rewrite auth so that we can use user id instead
            title={title}
            price={price}
          />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
