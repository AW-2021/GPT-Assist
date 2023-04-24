import React from 'react'
import './accountInfo.css'
import LeftNav from '../../components/leftnav/leftnav'
import UpgradePane from "../../components/upgradePane/upgradePane";

export default function AccountInfo() {
  return (
    <div className='accountInfoContainer'>
      <LeftNav />
      <div className="OuterWrapper">
      <UpgradePane/>
        <div className="InnerWrapper">
          account
        </div>
      </div>
    </div>
    
  )
}
