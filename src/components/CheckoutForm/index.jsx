import "./checkoutForm.css";

import axios from "axios";
import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { Link } from "react-router-dom";

// utils for pretty euros
import { asPrice } from "../../utils/utils";

// For readability
const BACKEND_PAYMENT_URL =
  "https://lereacteur-vinted-api.herokuapp.com/payment";

// Fake values
const FEES_INSURANCE = 0.4;
const FEES_TRANSPORT = 0.8;

const CheckoutForm = ({ token, title, price }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  // Compute total
  const amount = price + FEES_INSURANCE + FEES_TRANSPORT;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Disable button while proceeding
      setIsLoading(true);

      // Get card info
      const cardElement = elements.getElement(CardElement);

      // Get stripeToken for this card payment
      const stripeResponse = await stripe.createToken(cardElement, {
        name: token, // need to rewrite everything to record id when authentification append
      });
      const stripeToken = stripeResponse.token.id;

      // Backend expects stripeToken (source), title, and amount
      const payload = {
        token: stripeToken,
        title: title,
        amount: amount,
      };
      // Authenticated request to the payment route of our backend
      const response = await axios.post(BACKEND_PAYMENT_URL, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // If backend confirm transaction, go on
      if (response.data.status === "succeeded") {
        setIsLoading(false);
        setCompleted(true);
      }
    } catch (error) {
      // TODO: add errorMessage ?
      console.error(error.message);
      console.error(error.response?.data);
    }
  };

  return (
    <div className="checkout-form-container">
      <h1>Résumé de la commande</h1>

      <div className="columns">
        <span>Commande</span>
        <span>{asPrice(price)}</span>
      </div>
      <div className="columns">
        <span>Frais de protection acheteurs</span>
        <span>{asPrice(FEES_INSURANCE)}</span>
      </div>
      <div className="columns">
        <span>Frais de port</span>
        <span>{asPrice(FEES_TRANSPORT)}</span>
      </div>

      <hr />

      <div className="columns bold">
        <span>Total</span>
        <span>{asPrice(amount)}</span>
      </div>
      <p>
        Il ne vous reste plus qu'une étape pour vous offrir{" "}
        <span className="bold">{title}</span>. Vous allez payer{" "}
        <span className="bold">{asPrice(amount)}</span> (frais de protection et
        frais de port inclus).
      </p>

      <hr />

      {!completed ? (
        <form onSubmit={handleSubmit}>
          <CardElement />
          <hr />
          <button type="submit" disabled={!stripe || !elements || isLoading}>
            Payer
          </button>
        </form>
      ) : (
        <>
          <p className="center">Paiement effectué ! Merci !</p>
          <Link to="/">
            <button className="btn btn-primary">Continuer mes achats</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default CheckoutForm;
