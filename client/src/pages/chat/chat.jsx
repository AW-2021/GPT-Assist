import React from "react";
import "./chat.css";
import LeftNav from "../../components/leftnav/leftnav";
import FormSection from "../../components/formSection/formSection";
import AnswerSection from "../../components/answerSection/answerSection";
import UpgradePane from "../../components/upgradePane/upgradePane";

export default function Chat() {
  return (
    <div className="chatContainer">
      <LeftNav />
      <div className="OuterWrapper">
      <UpgradePane/>
        <div className="InnerWrapper">
          <div className="chat">
            <AnswerSection />
            <FormSection />
          </div>
          <div className="editor">editor</div>
        </div>
      </div>
    </div>
  );
}
