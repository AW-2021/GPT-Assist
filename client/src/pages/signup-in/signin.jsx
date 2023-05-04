import "./signup-in.css";
import { Grid } from "@mui/material";
//import { GoogleLogin } from "react-google-login";

export default function Signup() {
  return (
    <Grid container style={{ justifyContent: "center" }}>
      <Grid item xs={8} sm={7} md={4}>
        <form
          style={{
            margin: "100px 0",
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
            <h4>Sign In</h4>
            <p>
              <a href="/" style={{ color: "dodgerblue" }}>
                I don't have an account
              </a>
            </p>
          </div>

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

          <button type="submit" className="signup-inbtn">
            Sign In
          </button>

          <p>
            <a href="#" style={{ color: "grey" }}>
              Can't sign in?
            </a>
          </p>
          
           {/*
            <GoogleLogin
            buttonText="Sign In with Google"
            className="googleButton"/>
           */}
          

          <br/><br/>

          <p style={{ color: "grey", fontSize:"12px" }}>
              This site is protected by reCAPTCHA and the Google <u>Private Policy</u> and <u>Terms of Service</u> apply.
          </p>

        </form>
      </Grid>
    </Grid>
  );
}
