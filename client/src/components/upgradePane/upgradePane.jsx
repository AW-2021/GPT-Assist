import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FiMoon } from "react-icons/fi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FiMaximize } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function UpgradePane() {
  return (
    <div className="flex items-center shadow-xl justify-between h-[60px] border-b-[1px]
      border-[rgb(201,201,201)] bg-[rgb(237,240,243)] text-[14px] py-8 px-10 font-normal">
        
      <div className="basis-2/3 flex flex-row justify-center items-center">
        <AiFillStar style={{ color: "orange", fontSize: "1.3em", marginRight:"10px", display: "inline", marginLeft: "auto" }}/>
          Upgrade to Pro Plan To Get Access To All The Features &nbsp; &nbsp;
        <Link to="/pricing">
          <button type="button" className="btn btn-primary">
            Upgrade Now !
          </button>
        </Link>
      </div>
      <div className="flex flex-row justify-between gap-[1.5rem]">
        <FiMoon style={{ fontSize: "1.3em", color: "darkBlue"}} />
        <AiOutlineQuestionCircle style={{ fontSize: "1.3em", color: "darkBlue" }} />
        <FiMaximize style={{ fontSize: "1.3em", color: "darkBlue" }} />
      </div>
    </div>
  );
}
