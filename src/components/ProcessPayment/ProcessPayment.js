import React from "react";
import { Elements,CardElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51J6QQjLzYW4o718HIPO9bxpIhULn2zDnIhPFOfOam3FryEfHTWzDK1zkNURCGIRIDhD0NFpEtjiTznyhFomyqWAc00A5Acq7iQ"
);

const ProcessPayment = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
      <CardElement
  options={{
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  }}
/>
      </Elements>
    </div>
  );
};

export default ProcessPayment;
