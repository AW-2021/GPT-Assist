import React from "react";
import "./welcome.css";
import LeftNav from "../../components/leftnav/leftnav";
import UpgradePane from "../../components/upgradePane/upgradePane";
import { BsSearch } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { Grid } from '@mui/material';

export default function Welcome() {
  return (
    <div className="md:flex h-full w-full">
      <LeftNav />
      <div className="OuterWrapper">
        <UpgradePane />
        <div className="welcomeInnerWrapper">
          <div className="welcomeSection">
            <div className="welcomeBox">
              <h2>Welcome To GPT Assist</h2>
              <h6>Get Started By Writing A Task And GPT Assist </h6>
              <h6>Can Do The Rest!</h6>

              <div className="welcomeNotice">
                <h7>Explore Your Imagination!</h7>
                <div>"Write engaging content on how </div>
                <div>AI is changing the world"</div>
              </div>

              <div className="welcomeNotice">
                <h7>Ask The Better Way!</h7>
                <div>"Write engaging content on how </div>
                <div>AI is changing the world"</div>
              </div>

              <div className="welcomeNotice">
                <h7>Make Complex Stuff Simple!</h7>
                <div>"Write engaging content on how </div>
                <div>AI is changing the world"</div>
              </div>
              <br />

              <h8>Not Sure Where To Start?</h8>
              <h8>
                Check Out Our{" "}
                <a href="http://localhost:3000/prompts">"Prompt Library"</a> For
                Inspiration
              </h8>
            </div>
            <br />
            <textarea
              rows="1"
              className="form-control"
              placeholder="E.G 'I want to start a car washing business that would make me rich' "
            ></textarea>
          </div>
          <div className="allTopics">
            All Topics
            <div className="search">
              <button type="submit" class="searchButton">
                <BsSearch style={{ color: "grey" }} />
              </button>
              <input
                type="text"
                className="searchTerm"
                placeholder="What do you want to write?"
              />
            </div>

            
            <div className="topicBox">
              <img src="https://cdn.pixabay.com/photo/2017/07/03/20/17/colorful-2468874_960_720.jpg" alt="social media"/>
              <div className="topicContent">
                Social Media <br />
                <h7>Outline A Systematic Approach To Identifying</h7>
              </div>
              <AiFillStar
                style={{
                  color: "orange",
                  fontSize: "1.3em"
                }}
              />
            </div>


            <div className="topicBox">
              <img src="https://cdn-icons-png.flaticon.com/512/2600/2600291.png" alt="copy writing"/>
              <div className="topicContent">
                Copy Writing <br />
                <h7>Outline A Systematic Approach To Identifying</h7>
              </div>
              <AiFillStar
                style={{
                  color: "orange",
                  fontSize: "1.3em"
                }}
              />
            </div>

            <div className="topicBox">
              <img src="https://cdn-icons-png.flaticon.com/512/6114/6114045.png" alt="blog"/>
              <div className="topicContent">
                Blog Articles <br />
                <h7>Outline A Systematic Approach To Identifying</h7>
              </div>
            </div>

            <div className="topicBox">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZNSQOHNnXFC3FCYHuunyRzasD_F4DEqlJuw&usqp=CAU" alt="website"/>
              <div className="topicContent">
                Website Copy <br />
                <h7>Outline A Systematic Approach To Identifying</h7>
              </div>
            </div>

            <div className="topicBox">
              <img src="data:image/jpeg;base64,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" alt="email"/>
              <div className="topicContent">
                Email Marketing <br />
                <h7>Outline A Systematic Approach To Identifying</h7>
              </div>
            </div>

            <div className="topicBox">
              <img src="data:image/png;base64,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" alt="sales"/>
              <div className="topicContent">
                Sales Funnel <br />
                <h7>Outline A Systematic Approach To Identifying</h7>
              </div>
            </div>

            <div className="topicBox">
              <img src="https://static.vecteezy.com/system/resources/previews/020/784/801/original/general-knowledge-icon-vector.jpg" alt="general"/>
              <div className="topicContent">
                General <br />
                <h7>Outline A Systematic Approach To Identifying</h7>
              </div>
            </div>

            <div className="topicBox">
              <img src="https://png.pngtree.com/element_our/20200702/ourmid/pngtree-online-consulting-multicolor-icons-image_2291326.jpg" alt="prompts"/>
              <div className="topicContent">
                Custom Prompts <br />
                <h7>Outline A Systematic Approach To Identifying</h7>
              </div>
            </div>

          </div>
        </div>
      </div>
      </div>
  );
}
