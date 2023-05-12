import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import CheckoutForm from "../../components/checkoutForm/checkoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

export default function StripeCheckout() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/checkout/config").then(async (r) => {
      const { publishableKey } = await r.json();
      console.log(publishableKey);
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/checkout/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({}),
    }).then(async (r) => {
      const { clientSecret } = await r.json();
      console.log(clientSecret);
      setClientSecret(clientSecret);
    });
  }, []);

  return (
    <Grid container style={{ justifyContent: "center" }}>
      <Grid
        item
        xs={10}
        sm={5}
        md={4}
        style={{
          margin: "80px 10px 0 10px",
        }}
      >
        <img
          src="https://crazyrichpeasants.com/wp-content/uploads/2023/01/OpenAI.png"
          alt="OpenAI"
          style={{ width: "120px", height: "80px" }}
        />
        <p>Subscribe to ChatGPT Plus Subscription</p>
        <div
          style={{ display: "flex", alignItems: "center" }}
          className="font-bold my-3"
        >
          <h1 className="text-5xl">$20</h1>
          <div style={{ fontSize: "12px", marginLeft: "5px" }}>
            per <br />
            month
          </div>
        </div>
        <div className="text-sm">
          <p>ChatGPT Plus Subscription ~ $20</p>
          <p>Subtotal ~ $20</p>
          <hr />
          <p style={{ color: "darkgrey" }}>Tax ~ Enter address to calculate</p>
          <hr />
          <p>Total due today ~ $20</p>
        </div>
      </Grid>

      <Grid
        item
        xs={10}
        sm={5}
        md={4}
        style={{
          margin: "80px 0 10px 0",
          padding: "20px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        {clientSecret && stripePromise && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm />
          </Elements>
        )}
      </Grid>
    </Grid>
  );
}
