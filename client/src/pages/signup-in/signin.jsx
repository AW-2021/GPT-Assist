import "./signup-in.css";
import { Grid } from "@mui/material";
//import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/auth/login", {
        email,
        password,
      });

      const { token } = res.data;
      localStorage.setItem("token", token);
      navigate("/welcome"); // Redirect user to welcome
    } catch (error) {
      console.error(error);
    }
  };

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            className="signup-inInput"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="signup-inbtn" onClick={handleLogin}>
            Sign In
          </button>

          <p>
            <a href="#welcome" style={{ color: "grey" }}>
              Can't sign in?
            </a>
          </p>

          {/*
            <GoogleLogin
            buttonText="Sign In with Google"
            className="googleButton"/>
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
