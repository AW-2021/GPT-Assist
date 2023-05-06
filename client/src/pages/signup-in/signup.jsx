import "./signup-in.css";
import { Grid } from "@mui/material";
//import { GoogleLogin } from "react-google-login";

export default function Signup() {
  return (
    <Grid container style={{ justifyContent: "center" }}>
      <Grid item xs={8} sm={7} md={4}>
        <form
          style={{
            margin: "65px 0",
            padding: "20px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h4>Sign Up</h4>
            <p>
              <a href="/signin" style={{ color: "dodgerblue" }}>
                I have an account
              </a>
            </p>
          </div>

          <input
            className="signup-inInput"
            type="text"
            placeholder="Name"
            required
          />

          <input
            className="signup-inInput"
            type="text"
            placeholder="Email"
            required
          />

          <input
            className="signup-inInput"
            type="password"
            placeholder="Password"
            required
          />

          <p>
            By signing up, you agree to the&nbsp;
            <a href="#" style={{ color: "dodgerblue" }}>
              Terms & Conditions&nbsp;
            </a>
            and&nbsp;
            <a href="#" style={{ color: "dodgerblue" }}>
              Privacy Policy
            </a>
            .
          </p>

          <button type="submit" className="signup-inbtn">
            Agree and Sign Up
          </button>
 
          {/*
          <GoogleLogin
            buttonText="Sign Up with Google"
            className="googleButton"
          />
            */}

          <br />
          <br />

          <p style={{ color: "grey", fontSize: "12px" }}>
            This site is protected by reCAPTCHA and the Google{" "}
            <u>Private Policy</u> and <u>Terms of Service</u> apply.
          </p>
        </form>
      </Grid>
    </Grid>
  );
}
