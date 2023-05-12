import "./plans.css";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function ProPlan() {
  return (
    <Grid item xs={6} sm={6} md={6}>
      <div className="plan" style={{ marginRight: "none" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h5 className="text-xl">Pro Plan</h5>
          <div style={{fontSize:"14px"}} className="font-bold">
          $19 / monthly<br/>
          $147 / yearly
          </div>
          <p></p>
        </div>
      
          <p>Get Access to:</p>

        <ul className="planList"  type="circle">
          <li>Limited Number of Projects</li>
          <li>100+ Predesigned Prompts</li>
          <li>Edit and Customize Prompts</li>
          <li>Browser Extension</li>
          <li>UNLIMITED Content Generation</li>
          <li>Save unlimited copy</li>
          <li>Access all your copy in one place</li>
          <li>Create your own prompts</li>
          <li>Get access to all future updates</li>
          <li>Priority Email Support</li>
        </ul>

        <Link to="/checkout">
        <button type="button" class="btn btn-light">
          Get Started
        </button>
        </Link>

      </div>
    </Grid>
  );
}
