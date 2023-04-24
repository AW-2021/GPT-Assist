import React from "react";
import "./leftnav.css";
import { CiPaperplane } from "react-icons/ci";
import { AiOutlineFileSearch, AiOutlineProject } from "react-icons/ai";
import { RxPieChart } from "react-icons/rx";
import { SiFramer } from "react-icons/si";
import { Link } from "react-router-dom";

export default function LeftNav() {
  return (
    <div className="leftnav">
      <div className="logo">
        <SiFramer />
        &nbsp;GPT Assist
      </div>
      <div className="nav">
        <ul>
          <Link
            to="/dashboard"
            style={{ textDecoration: "none", color: "white" }}
          >
            <li>
              <RxPieChart />
              &nbsp;&nbsp;Dashboard
            </li>
          </Link>
          <Link
            to="/chat"
            style={{ textDecoration: "none", color: "white" }}
          >
            <li>
              <CiPaperplane />
              &nbsp;&nbsp;Chat
            </li>
          </Link>

          <Link
            to="/projects"
            style={{ textDecoration: "none", color: "white" }}
          >
            <li>
              <AiOutlineProject />
              &nbsp;&nbsp;Projects
            </li>
          </Link>

          <Link
            to="/prompts"
            style={{ textDecoration: "none", color: "white" }}
          >
            <li>
              <AiOutlineFileSearch />
              &nbsp;&nbsp;Prompts
            </li>
          </Link>
          
        </ul>
      </div>
    </div>
  );
}
