import React from "react";
import "./upgradePane.css";
import { AiFillStar } from "react-icons/ai";
import { FiMoon } from "react-icons/fi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FiMaximize } from "react-icons/fi";

export default function UpgradePane() {
  return (
    <div className="upgrade">
      <AiFillStar
        style={{ color: "orange", fontSize: "1.3em", marginLeft: "200px" }}
      />
      <div className="upgradeText">
        Upgrade to Pro Plan To Get Access To All The Features &nbsp;&nbsp;
        <button type="button" class="btn btn-primary" id='upgradeBtn'>
          Upgrade Now!
        </button>
      </div>
      <div className="upgradeIcons">
        <FiMoon style={{ fontSize: "1.3em" }} />
        <AiOutlineQuestionCircle style={{ fontSize: "1.3em" }} />
        <FiMaximize style={{ fontSize: "1.3em" }} />
      </div>
    </div>
  );
}
