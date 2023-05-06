import "./pricingplans.css";
import { Grid } from "@mui/material";
import FreePlan from "../../components/plans/freePlan";
import ProPlan from "../../components/plans/proPlan";

export default function PricingPlans() {
  return (
    <Grid container style={{ justifyContent: "center" }}>
      <div style={{display:"flex", flexDirection:"column", margin: "50px 0", alignItems: "center"}}  >
        <h2>
          <u>Choose a Plan</u>
        </h2>
        <div className="periodical">
          <p className="periodicalItem" style={{borderRight:'none'}}>Monthly</p>
          <p className="periodicalItem">Annually</p>
        </div>
        <p>Pay monthy or yearly. Cancel at any time</p>
        <Grid item xs={12} sm={12} md={12} style={{display:"flex"}} >
            <FreePlan/>
            <ProPlan/>
        </Grid>
      </div>
    </Grid>
  );
}
