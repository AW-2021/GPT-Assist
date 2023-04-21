import React from "react";
import "./dashboard.css";
import LeftNav from "../../components/leftnav/leftnav";

export default function Dashboard() {
  return (
    <div className="dashboardContainer">
      <LeftNav />
      <div className="component">dashboard</div>
    </div>
  );
}
