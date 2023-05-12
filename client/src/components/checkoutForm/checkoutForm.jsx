import "./checkoutForm.css";
import { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "https://example.com/order/123/complete",
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-end">
      <a href="/signin" style={{ color: "dodgerblue" }} className="text-sm">
        Sign in
      </a>

      <PaymentElement id="payment-element" className="w-full"/>

      <button className="checkout-btn" disabled={!stripe || !elements}>
        {isProcessing ? "Processing ... " : "Pay now"}
      </button>
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
