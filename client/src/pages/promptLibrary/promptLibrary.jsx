import React from 'react'
import './promptLibrary.css'
import LeftNav from '../../components/leftnav/leftnav'
import UpgradePane from "../../components/upgradePane/upgradePane";

export default function PromptLibrary() {
  return (
    <div className="promptContainer">
     <LeftNav />
      <div className="OuterWrapper">
      <UpgradePane/>
        <div className="InnerWrapper">
          prompts
        </div>
      </div>
    </div>
  )
}
