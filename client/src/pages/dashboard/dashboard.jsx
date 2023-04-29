import React from "react";
import "./dashboard.css";
import LeftNav from "../../components/leftnav/leftnav";
import UpgradePane from "../../components/upgradePane/upgradePane";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Grid} from "@material-ui/core";

export default function Dashboard() {
  return (
    <Grid container>
      <LeftNav />
      <div className="OuterWrapper">
      <UpgradePane/>
        <div className="dashboardInnerWrapper">
          <div>
            <h2>Welcome To GPT Assist👋</h2>
            <h5>Follow These Steps To Get Started And Write Anything And Anywhere</h5>
            <div className="stepsBox">
              <ol>
                <li>
                  <div className="step">
                    <p>"Account Created Successfully"</p>
                    <button type="button" class="btn btn-light">Free Plan</button>
                    <button type="button" class="btn btn-primary">Upgrade Now</button>
                  </div>
                </li>
                <li>
                  <div className="step">
                    <p>"Watch The Welcome Video"</p>
                    <button type="button" class="btn btn-light">Watch Video</button>
                    <div className="stepsText">Important: Watch This Video To Complete Your Account Setup</div>
                  </div>
                </li>
                <li>
                  <div className="step">
                    <p>"Add Your Open API Key"</p>
                    <button type="button" class="btn btn-light">Add API Key</button>
                    <div className="stepsText">Integrate Your API Key To Get Started To Writing</div>
                  </div>
                </li>
                <li>
                  <div className="step">
                    <p>"Create Your First Project"</p>
                    <button type="button" class="btn btn-light">Create</button>
                    <div className="stepsText">Follow The Steps Provided To Start Creating Your Project</div>
                  </div>
                </li>
                <li>
                  <div className="step">
                    <p>"Write A Blog For Your Website"</p>
                    <button type="button" class="btn btn-light">Write</button>
                    <div className="stepsText">Start Writing A Blog Article Or Social Media Post Headlines</div>
                  </div>
                </li>
                <li>
                  <div className="step">
                    <p>"Save A Copy"</p>
                    <button type="button" class="btn btn-light">Save</button>
                    <div className="stepsText">Save All Your Copy Generated In One Place And Access Anytime</div>
                  </div>
                </li>
              </ol>
            </div>
            <div className="projectsHeading">
            <h5>Projects</h5>
            <button type="button" class="btn btn-light">Create A Folder</button>
            <button type="button" class="btn btn-primary">View All</button>
            </div>
            <div className="projectsList">
           
            <div className="projectsBox">
            <AiOutlinePlusCircle style={{fontSize: "1.5em"}}/>
              Create A New Project
            </div>

            <div className="projectsBox">
            Project 1
            </div>

            <div className="projectsBox">
           Project 2
            </div>


            </div>

            

          </div>
        </div>
      </div>
      </Grid>
  );
}
