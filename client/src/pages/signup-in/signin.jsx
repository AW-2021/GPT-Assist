import "./signup-in.css";
import { Grid } from "@mui/material";
//import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router";
import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from '../../context/authContext';


export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();
  
  const {isFetching, dispatch}=useContext(AuthContext)

  const handleLogin = async (e) => {
    e.preventDefault();
    
    dispatch({type:"LOGIN_START"})
    try {
      const user={
        email:email,
        password:password
      }

      const res = await axios.post("http://localhost:3000/auth/login", user);
      const { token } = res.data;
      user.token = token;
      dispatch({type:"LOGIN_SUCCESS", payload:user})
      navigate("/welcome"); // Redirect user to welcome
    } catch (err) {  
      dispatch({type:"LOGIN_FAILURE", payload:err})
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
            <h4 className="text-2xl">Sign In</h4>
            <p>
              <a href="/signup" style={{ color: "dodgerblue" }} className="text-sm">
                I don't have an account
              </a>
            </p>
          </div>

          <br/>

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
            <a href="#welcome" style={{ color: "grey" }} className="text-sm">
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

          <p style={{ color: "grey", fontSize: "12px" }} >
            This site is protected by reCAPTCHA and the Google{" "}
            <u>Private Policy</u> and <u>Terms of Service</u> apply.
          </p>
        </form>
      </Grid>
    </Grid>
  );
}
