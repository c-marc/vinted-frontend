import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const BACKEND_PAYMENT_URL =
  "https://lereacteur-vinted-api.herokuapp.com/payment";

const CheckoutForm = ({ token, title, price }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  console.log("CheckoutForm ok ?");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);

      const cardElement = elements.getElement(CardElement);

      const stripeResponse = await stripe.createToken(cardElement, {
        name: token, // need to rewrite everything to record id when authentification append
      });

      const stripeToken = stripeResponse.token.id;
      console.log("stripeToken received");

      const payload = {
        stripeToken,
        title,
        amount: price * 100,
      };
      console.log("Payload for BE", payload);

      const response = await axios.post(BACKEND_PAYMENT_URL, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("ok", response.data);
      if (response.data.status === "succeeded") {
        setIsLoading(false);
        setCompleted(true);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="checkout-form">
      <h1>Résumé de la commande</h1>
      TODO...
      <p>Il ne vous reste plus qu'à...</p>
      {!completed ? (
        <form onSubmit={handleSubmit}>
          <CardElement />
          <button type="submit" disabled={isLoading}>
            Payer
          </button>
        </form>
      ) : (
        <span>Paiement effectué ! </span>
      )}
    </div>
  );
};

export default CheckoutForm;
