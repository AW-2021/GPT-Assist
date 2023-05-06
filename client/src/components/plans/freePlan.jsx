import "./plans.css";
import { Grid } from "@mui/material";

export default function FreePlan() {
  return (
    <Grid item xs={6} sm={6} md={6}>
    <div className="plan">
      <h5>Free Plan</h5>
      <p>Get Access to:</p>
      <ul className="planList" type="circle">
          <li>Limited Number of Projects</li>
          <li>100+ Predesigned Prompts</li>
          <li>Edit and Customize Prompts</li>
          <li>Browser Extension</li>
          <li><del>Save unlimited copy</del></li>
          <li><del>Access all your copy in one place</del></li>
          <li><del>Create your own prompts</del></li>
          <li><del>Email Support</del></li>
      </ul>

      <button type="button" className="btn btn-light" >Get Started</button>
    </div>
   </Grid>
  );
}
