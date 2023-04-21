import React from "react";
import "./chat.css";
import LeftNav from "../../components/leftnav/leftnav";

export default function Chat() {
  return (
    <div className="chatContainer">
      <LeftNav />
      <div className="component">chat</div>
    </div>
  );
}
