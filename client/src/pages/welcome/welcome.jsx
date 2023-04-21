import React from 'react'
import './welcome.css'
import LeftNav from '../../components/leftnav/leftnav'

export default function Welcome() {
  return (
    <div className="welcomeContainer">
      <LeftNav />
      <div className="component">welcome</div>
    </div>
  )
}
