import React from 'react'
import './projects.css'
import LeftNav from '../../components/leftnav/leftnav'
import UpgradePane from "../../components/upgradePane/upgradePane";

export default function Projects() {
  return (
    <div className="projectsContainer">
      <LeftNav />
      <div className="OuterWrapper">
      <UpgradePane/>
        <div className="InnerWrapper">
          projects
        </div>
      </div>
    </div>
  )
}