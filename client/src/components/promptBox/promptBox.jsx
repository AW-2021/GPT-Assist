import React from "react";
import "./promptBox.css";

export default function PromptBox(props) {
  return (
    <div className="prompt">
      <div style={{display:'flex'}}>
        <img className="promptImg" src={props.src} alt={props.alt} />
        <p className="new">NEW</p>
      </div>

      <div className="promptText">{props.txt}</div>
      <p className="promptDesc">
        "Write engaging content on how AI is changing the world"
      </p>
    </div>
  );
}
