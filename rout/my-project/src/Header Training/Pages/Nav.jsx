import React from 'react'
import {Link } from "react-router-dom"

export default function Nav() {
  return (
    <div>
        <Link  to={'/about'}>About</Link>|
        <Link  to={'/main'}>Main</Link>|
        <Link  to={'/contact'}>Contact</Link>|
        <Link to={'/profile/hadi'}>Profile</Link>
    </div>
  )
}
