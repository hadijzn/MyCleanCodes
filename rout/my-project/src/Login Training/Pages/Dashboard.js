import React, {  useContext } from 'react'
import { IsLoggedInContext } from '../App'

export default function Dashboard() {
    const { username } = useContext(IsLoggedInContext)

  return (
    <div>
              Welcome to dashboard, {username || 'Guest'}!
    </div>
  )
}
